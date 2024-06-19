import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Dapatkan data pengguna dari body request
  const { nama, email, nocontact, alamat, jumlah_pinjaman, tenor } = req.body;

  // Mendapatkan tanggal saat ini dalam format YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  // Konfigurasi Supabase
  const supabaseUrl = 'https://vpxadqnrwwtbochkzjoy.supabase.co'; // Ganti dengan URL Supabase Anda
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZweGFkcW5yd3d0Ym9jaGt6am95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxNjkzODAsImV4cCI6MjAzMjc0NTM4MH0.2uOVZbFWx0jAbUytL438FEwlhUu0vQ8XYMV3SNTHa6w'; 
  // Ganti dengan kunci Supabase Anda
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // Cek apakah data dengan nocontact dan timestamp yang sama sudah ada di database
    const { data: existingData, error: existingError } = await supabase
      .from('forms')
      .select('*')
      .eq('nocontact', nocontact)
      .eq('timestamp', today);

    if (existingError) {
      throw new Error('Gagal memeriksa data yang sudah ada');
    }

    if (existingData.length > 0) {
      // Jika data sudah ada, kirim respons bahwa data tidak bisa disimpan
      return res.status(400).json({ error: 'Data dengan nocontact dan timestamp yang sama sudah ada' });
    }

    // Simpan data pengguna ke database Supabase
    const { data, error } = await supabase.from('forms').insert([{ 
      nama,
      email,
      nocontact,
      alamat,
      jumlah_pinjaman,
      tenor,
      status: 'Submitted',
      timestamp: today
    }]);

    if (error) {
      throw new Error('Gagal menyimpan data pengguna');
    }

    res.status(201).json({ message: 'Data pengguna berhasil disimpan' });
  } catch (error) {
    console.error('Terjadi kesalahan:', error.message);
    res.status(500).json({ error: 'Terjadi kesalahan saat menyimpan data pengguna' });
  }
}

// Fungsi untuk mem-parsing parameter
function parseParameters(req) {
  // Lakukan parsing parameter di sini dan kembalikan nilai yang diperlukan
  const { nocontact } = req.body; // Misalnya, jika nocontact berada di dalam body request
  return { nocontact };
}