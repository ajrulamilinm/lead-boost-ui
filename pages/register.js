import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RegistrationForm from '../components/RegistrationForm';

const Register = () => {
  const router = useRouter();
  const { data } = router.query;
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');
  const [target, setTarget] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [nocontact, setNocontact] = useState(''); // State to hold nocontact value

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        try {
          // Decode base64 string
          const decodedString = atob(data); // Decode base64
          const parsedData = JSON.parse(decodedString);

          const { id, target, timestamp, nocontact } = parsedData; // Include nocontact here

          if (id && target && timestamp) {
            setIsValid(true);
            setId(id);
            setTarget(target);
            setTimestamp(timestamp);
            setNocontact(nocontact); // Set the nocontact state
          } else {
            setMessage('Data yang diberikan tidak lengkap.');
          }
        } catch (error) {
          setMessage('Data yang diberikan tidak valid.');
          console.error('Error decoding or parsing data:', error.message);
        }
      } else {
        setMessage('Halaman ini tidak bisa diakses tanpa parameter yang diperlukan.');
      }
    };

    fetchData();
  }, [data]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {isValid ? (
        <RegistrationForm
          id={id}
          target={target}
          timestamp={timestamp}
          nocontact={nocontact} // Pass nocontact as a prop to RegistrationForm
        />
      ) : (
        <div className="p-8 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Error</h2>
          <p className="text-red-500">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Register;