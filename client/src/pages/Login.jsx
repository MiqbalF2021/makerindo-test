import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!username.includes('@')) {
    alert('email harus mengandung karakter "@".');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(username)) {
    alert('email tidak valid');
    return;
  }

  const response = await fetch('http://localhost:5000/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('authToken', data.token);
    alert(data.message);
    setIsAuthenticated(true);
    navigate('/');
  } else {
    alert(data.message);
  }
};


  return (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Login</h1>

    <div className="space-y-4">
      <input
        type="email"
        placeholder="Email/Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        required
      />
    </div>

    <div className="flex items-center justify-between mt-4">
      <label className="flex items-center text-gray-600">
        <input type="checkbox" className="mr-2 accent-blue-500" />
        Remember me
      </label>
      <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
    </div>

    <button 
      type="submit" 
      className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
    >
      Login
    </button>

    <p className="text-gray-600 text-center mt-4">
      Belum punya akun? 
      <a href="/register" className="text-blue-500 hover:underline ml-1">Register</a>
    </p>
  </form>
</div>

  );
}

export default Login;
