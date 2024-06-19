import { supabase } from '../../lib/supabaseClient';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Hash the password with a salt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const { data, error } = await supabase
      .from('masterlogin')
      .insert([{ email, password: hashedPassword }]);

    if (error) {
      if (error.code === '23505') { // assuming 23505 is the unique violation error code for supabase/postgres
        return res.status(409).json({ error: 'User already exists' });
      }
      return res.status(400).json({ error: error.message });
    }

    res.status(201).json(data);
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}