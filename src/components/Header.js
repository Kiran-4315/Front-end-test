import React from 'react';

const Header = ({ logout }) => {
  const user = { name: "User" }; // Temporary hardcoded user for demo

  return (
    <header className="header">
      <h1>Welcome, {user ? user.name : 'Guest'}</h1>
      {user && <button className="logout-btn" onClick={logout}>Logout</button>} {/* Logout Button */}
    </header>
  );
};

export default Header;