// pages/dashboard.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabaseClient } from '../lib/client'; // Pastikan impor ini sesuai dengan lokasi file client.js

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const { user, error } = await supabaseClient.auth.api.getUserByCookie(req);

        if (error) {
          console.error('Error checking session:', error.message);
          router.replace('/login');
        }
      } catch (error) {
        console.error('Error checking session:', error.message);
        router.replace('/login');
      }
    };

    checkSession();
  }, [router]);

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Konten dashboard */}
    </div>
  );
};

export default Dashboard;
