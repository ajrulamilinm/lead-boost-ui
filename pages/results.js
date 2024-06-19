import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ResultsPage = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterValue, setFilterValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('nama'); // Default filter by 'nama'
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const itemsPerPage = 6;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/getUsers', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data); // Initialize filteredUsers with all users
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [router]);

  useEffect(() => {
    // Filter users based on filterValue, selectedFilter, startDate, and endDate
    const filtered = users.filter(user => {
      const filterText = filterValue.toLowerCase();
      const filterDate = (!startDate || !endDate || (user.timestamp >= startDate && user.timestamp <= endDate));
      return (
        user[selectedFilter].toLowerCase().includes(filterText) &&
        filterDate
      );
    });
    setFilteredUsers(filtered);
  }, [filterValue, selectedFilter, startDate, endDate, users]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">Error: {error}</div>;
  }

  const cardColors = [
    'bg-red-100', 'bg-yellow-100', 'bg-green-100', 
    'bg-blue-100', 'bg-indigo-100', 'bg-purple-100', 
    'bg-pink-100'
  ];

  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-6xl p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Laporan Data Lead</h2>
        <div className="mb-4 flex justify-between items-center">
          <div className="relative">
            <select
              value={selectedFilter}
              onChange={handleSelectChange}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="nama">Nama</option>
              <option value="email">Email</option>
              <option value="nocontact">No Contact</option>
              <option value="status">Status</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 12.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
                />
              </svg>
            </div>
          </div>
          <input
            type="text"
            placeholder={`Search by ${selectedFilter}`}
            value={filterValue}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-lg w-96"
          />
        </div>
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <label htmlFor="startDate" className="text-gray-700">Start Date:</label>
            <input
              type="date"
              id="startDate"
              placeholder="Start Date"
              value={startDate}
              onChange={handleStartDateChange}
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex items-center space-x-4">
            <label htmlFor="endDate" className="text-gray-700">End Date:</label>
            <input
              type="date"
              id="endDate"
              placeholder="End Date"
              value={endDate}
              onChange={handleEndDateChange}
              className="p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        {filteredUsers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentUsers.map((user, index) => (
                <div
                  key={user.id}
                  className={`p-6 border border-gray-300 rounded-lg ${cardColors[index % cardColors.length]} shadow-lg`}
                >
                  <p className="text-gray-800 mb-2"><strong>Nama:</strong> {user.nama}</p>
                  <p className="text-gray-800 mb-2"><strong>Email:</strong> {user.email}</p>
                  <p className="text-gray-800 mb-2"><strong>No Contact:</strong> {user.nocontact}</p>
                  <p className="text-gray-800 mb-2"><strong>Alamat:</strong> {user.alamat}</p>
                  <p className="text-gray-800 mb-2"><strong>Jumlah Pinjaman:</strong> {user.jumlah_pinjaman}</p>
                  <p className="text-gray-800 mb-2"><strong>Tenor:</strong> {user.tenor}</p>
                  <p className="text-gray-800 mb-2"><strong>Status:</strong> {user.status}</p>
                  <p className="text-gray-800 mb-2"><strong>Timestamp:</strong> {user.timestamp}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6">
              <button 
                onClick={handlePreviousPage} 
                className={`px-4 py-2 bg-gray-300 rounded-md ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
              <button 
                onClick={handleNextPage} 
                className={`px-4 py-2 bg-gray-300 rounded-md ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-700">No users found.</div>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
