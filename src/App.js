// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { createDemoDocument } from './services/firebaseService';
// import NetworkTree from './components/NetworkTree';
// import Login from './components/Login';
// import Header from './components/Header'; // Import the Header component
// import './App.css'; // Import CSS for styling

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
//   const [data, setData] = useState(null); // Network data state

//   useEffect(() => {
//     const sampleData = {
//       name: "Root Node",
//       details: {
//         BV: 5,
//         coins: 10,
//       },
//       children: [
//         { name: "Child Node 1", status: "Active" },
//         { name: "Child Node 2", status: "Inactive" },
//         { name: "Child Node 3", status: "Active" },
//       ],
//     };

//     createDemoDocument(sampleData); // Save sample data to Firestore
//     setData(sampleData); // Set the data for the network tree
//   }, []);

//   const handleLogin = (authStatus) => {
//     setIsAuthenticated(authStatus); // Update authentication status
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false); // Logout user and set authentication status to false
//   };

//   return (
//     <Router>
//       {/* Conditionally render Header only if the user is authenticated */}
//       {isAuthenticated && <Header logout={handleLogout} />} 

//       <Routes>
//         {/* If authenticated, show NetworkTree; otherwise, show Login page */}
//         <Route path="/" element={isAuthenticated ? <NetworkTree data={data} /> : <Login onLogin={handleLogin} />} />
        
//         {/* Ensure only authenticated users can access the NetworkTree route */}
//         <Route path="/network" element={isAuthenticated ? <NetworkTree data={data} /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { createDemoDocument } from './services/firebaseService';
import NetworkTree from './components/NetworkTree';
import Login from './components/Login';
import Header from './components/Header'; // Import the Header component
import './App.css'; // Import CSS for styling

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const [data, setData] = useState(null); // Network data state

  useEffect(() => {
    // Sample data for demonstration
    const sampleData = {
      name: "Root Node",
      details: {
        BV: 5,
        coins: 10,
      },
      children: [
        { name: "Child Node 1", status: "Active" },
        { name: "Child Node 2", status: "Inactive" },
        { name: "Child Node 3", status: "Active" },
      ],
    };

    // Save sample data to Firestore
    createDemoDocument(sampleData);
    setData(sampleData); // Set the data for the network tree
  }, []);

  const handleLogin = (authStatus) => {
    setIsAuthenticated(authStatus); // Update authentication status
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Logout user and set authentication status to false
  };

  return (
    <Router>
      {/* Conditionally render Header only if the user is authenticated */}
      {isAuthenticated && <Header logout={handleLogout} />}

      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <div className="login">
                <Login onLogin={handleLogin} />
              </div>
            ) : (
              <Navigate to="/network" />
            )
          }
        />
        
        {/* NetworkTree Page */}
        <Route
          path="/network"
          element={
            isAuthenticated ? (
              <div className="network-tree-container">
                <NetworkTree data={data} />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
