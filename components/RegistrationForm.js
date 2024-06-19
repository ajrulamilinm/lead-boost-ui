import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const RegistrationForm = () => {
  const router = useRouter();
  const { data: encodedData } = router.query;

  const [id, setId] = useState('');
  const [target, setTarget] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');
  const [jumlahPinjaman, setJumlahPinjaman] = useState('');
  const [tenor, setTenor] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('text-red-700'); // Default to red
  const [showForm, setShowForm] = useState(true); // State to control form visibility
  const [showErrorContainer, setShowErrorContainer] = useState(false); // State to control error container visibility
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control success message visibility

  useEffect(() => {
    if (encodedData) {
      const decodedData = decodeData(encodedData);
      setId(decodedData.id);
      setTarget(decodedData.target);
      setTimestamp(decodedData.timestamp);
    }
  }, [encodedData]);

  const decodeData = (encodedData) => {
    try {
      const decodedString = Buffer.from(encodedData, 'base64').toString('utf-8');
      return JSON.parse(decodedString);
    } catch (error) {
      console.error('Error decoding data:', error.message);
      return {};
    }
  };

  const handleNamaChange = (e) => setNama(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAlamatChange = (e) => setAlamat(e.target.value);

  const handleJumlahPinjamanChange = (e) => {
    const value = e.target.value;
    // Check if the value is numeric
    if (!isNaN(value)) {
      setJumlahPinjaman(value);
    }
  };

  const handleTenorChange = (e) => {
    const value = e.target.value;
    // Check if the value is numeric and in multiples of 3, up to 24 months (2 years)
    if (!isNaN(value) && value % 3 === 0 && value <= 36) {
      setTenor(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !email || !alamat || !jumlahPinjaman || !tenor) {
      setMessage('Please fill out all required fields.');
      setMessageColor('text-red-700'); // Set message color to red for validation error
      return;
    }

    try {
      const formData = {
        nama,
        email,
        nocontact: target,
        alamat,
        jumlah_pinjaman: jumlahPinjaman,
        tenor,
        id,
        timestamp
      };

      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      const result = await response.json();
      setMessage('Data pengguna berhasil disimpan');
      setMessageColor('text-green-700'); // Set message color to green for success

      setShowSuccessMessage(true); // Show success message
      setShowForm(false); // Hide the form
      setShowErrorContainer(false); // Hide error container

      // Optional: Reset form fields
      setNama('');
      setEmail('');
      setAlamat('');
      setJumlahPinjaman('');
      setTenor('');
    } catch (error) {
      console.error('Terjadi kesalahan saat menyimpan data:', error.message);
      setMessage('Terjadi kesalahan saat menyimpan data');
      setMessageColor('text-red-700'); // Set message color to red for submission error
      setShowForm(false); // Hide the form
      setShowErrorContainer(true); // Show the error container
      setShowSuccessMessage(false); // Hide success message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {!showSuccessMessage && (
        <div className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Pengajuan Data Pinjaman</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nama" className="block text-gray-700 font-medium mb-2">Nama:</label>
              <input
                type="text"
                id="nama"
                value={nama}
                onChange={handleNamaChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="alamat" className="block text-gray-700 font-medium mb-2">Alamat:</label>
              <textarea
                id="alamat"
                value={alamat}
                onChange={handleAlamatChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="jumlahPinjaman" className="block text-gray-700 font-medium mb-2">Jumlah Pinjaman:</label>
              <input
                type="text"
                id="jumlahPinjaman"
                value={jumlahPinjaman}
                onChange={handleJumlahPinjamanChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="tenor" className="block text-gray-700 font-medium mb-2">Tenor (Bulan):</label>
              <select
                id="tenor"
                value={tenor}
                onChange={handleTenorChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Pilih Tenor (Bulan)</option>
                {Array.from({ length: 12 }, (_, i) => {
                  const month = (i + 1) * 3; // Kelipatan 3 hingga maksimal 2 tahun (24 bulan)
                  return <option key={month} value={month}>{month} Bulan</option>;
                })}
              </select>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          {message && (
            <div className={`mt-4 p-4 bg-green-100 border border-green-400 rounded ${messageColor}`}>
              {message}
            </div>
          )}
        </div>
      )}

      {showSuccessMessage && (
        <div className="w-full max-w-lg p-8 bg-green-100 border border-green-400 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Success</h2>
          <p className="text-green-700">{message}</p>
        </div>
      )}

      {showErrorContainer && (
        <div className="w-full max-w-lg p-8 bg-red-100 border border-red-400 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Error</h2>
          <p className="text-red-700">{message}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
