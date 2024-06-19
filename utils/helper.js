// utils/helper.js

// Fungsi untuk mengkodekan data menjadi base64
export const encodeData = (data) => {
    const jsonString = JSON.stringify(data);
    return Buffer.from(jsonString).toString('base64');
  };
  
  // Contoh fungsi lainnya sesuai kebutuhan aplikasi
  // export const otherFunction = () => {
  //   ...
  // };
  