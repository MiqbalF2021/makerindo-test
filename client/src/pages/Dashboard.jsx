import { useNavigate } from 'react-router-dom';

function Dashboard({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
  <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>

  <button 
    onClick={handleLogout} 
    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
  >
    Logout
  </button>
</div>

  );
}

export default Dashboard;
