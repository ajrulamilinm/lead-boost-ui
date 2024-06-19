import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vpxadqnrwwtbochkzjoy.supabase.co';
const supabaseKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZweGFkcW5yd3d0Ym9jaGt6am95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNjkzODAsImV4cCI6MjAzMjc0NTM4MH0.2uOVZbFWx0jAbUytL438FEwlhUu0vQ8XYMV3SNTHa6w';
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data, error } = await supabase.from('forms').select('*');

    if (error) {
      throw new Error('Gagal mengambil data pengguna');
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data pengguna' });
  }
}

