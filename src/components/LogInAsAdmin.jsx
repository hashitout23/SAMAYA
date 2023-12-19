import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogInAsAdmin = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [passkey, setPasskey] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasskeyChange = (e) => {
    setPasskey(e.target.value);
    setErrorMessage('');
  };

  const handleLogin = () => {
    if (passkey.trim() === '12345') {
      // You can add additional authentication logic here
      if (!isAuthenticated) {
        loginWithRedirect(); // Redirect to Auth0 login page
      } else {
        // Handle logout if user is already authenticated
        logout({ returnTo: window.location.origin });
      }
    } else {
      setErrorMessage('Incorrect passkey. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <p className="text-center text-lg mb-4">
          Please Enter the Authorized Passkey
        </p>
        <form className="flex items-center space-x-2 border rounded-md p-2 mb-4">
          <input
            className="w-full outline-none appearance-none placeholder-gray-600 text-gray-500"
            type="text"
            placeholder="Passkey"
            style={{ outline: 'none', boxShadow: '0 0 0 2px #fff' }}
            value={passkey}
            onChange={handlePasskeyChange}
          />
        </form>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <button
          className={`w-full text-white bg-purple-600 font-extrabold py-2 px-4 rounded ${
            passkey.trim() === '12345' ? 'cursor-pointer' : 'cursor-not-allowed'
          }`}
          onClick={handleLogin}
        >
          {isAuthenticated ? 'Log Out' : 'Log In As Admin'}
        </button>
      </div>
    </div>
  );
};

export default LogInAsAdmin;
