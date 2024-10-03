// import React, { useState } from 'react';
// import '../App.css'; // Adjust path if necessary
// import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome for icons

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === 'admin' && password === 'password') {
//       onLogin(true); // Set authenticated state
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="login">
//       <div className="shape shape1"></div>
//       <div className="shape shape2"></div>
//       <div className="shape shape3"></div>
//       <div className="login-card">
//         <h1 className="login-title">Welcome to Application</h1>
//         <p className="login-subtitle">Please log in to your account</p>
//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="input-group">
//             <label className="input-label">Username</label>
//             <div className="input-icon">
//               <i className="fa fa-user"></i> {/* User icon */}
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//                 placeholder="Enter your username"
//                 className="input-field"
//               />
//             </div>
//           </div>
//           <div className="input-group">
//             <label className="input-label">Password</label>
//             <div className="input-icon">
//               <i className="fa fa-lock"></i> {/* Lock icon */}
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 placeholder="Enter your password"
//                 className="input-field"
//               />
//             </div>
//           </div>
//           <button type="submit" className="login-btn">Log In</button>
//         </form>
//         <p className="login-footer">Forgot password? <a href="/">Click here</a></p>
//       </div>
//     </div>
//   );
// };

// export default Login;
// import React, { useState } from 'react';
// import '../App.css'; // Adjust path if necessary
// import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome for icons

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState(''); // State for username
//   const [password, setPassword] = useState(''); // State for password

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (username === 'admin' && password === 'password') {
//       onLogin(true); // Call onLogin to set authenticated state
//     } else {
//       alert('Invalid credentials'); // Alert for invalid login
//     }
//   };

//   return (
//     <div className="login">
//       <div className="shape shape1"></div>
//       <div className="shape shape2"></div>
//       <div className="shape shape3"></div>
//       <div className="login-card">
//         <h1 className="login-title">Welcome to Application</h1>
//         <p className="login-subtitle">Please log in to your account</p>
//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="input-group">
//             <label className="input-label">Username</label>
//             <div className="input-icon">
//               <i className="fa fa-user"></i> {/* User icon */}
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)} // Update username state
//                 required
//                 placeholder="Enter your username"
//                 className="input-field"
//               />
//             </div>
//           </div>
//           <div className="input-group">
//             <label className="input-label">Password</label>
//             <div className="input-icon">
//               <i className="fa fa-lock"></i> {/* Lock icon */}
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)} // Update password state
//                 required
//                 placeholder="Enter your password"
//                 className="input-field"
//               />
//             </div>
//           </div>
//           <button type="submit" className="login-btn">Log In</button>
//         </form>
//         <p className="login-footer">Forgot password? <a href="/">Click here</a></p>
//       </div>
//     </div>
//   );
// };

// export default Login; // Ensure default export


// import React, { useState } from 'react';
// import '../App.css'; // Adjust path if necessary

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState(''); // State for username
//   const [password, setPassword] = useState(''); // State for password

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent form default behavior

//     // Simple authentication check (for demo purposes)
//     if (username === 'admin' && password === 'password') {
//       onLogin(true);  // Call the onLogin function passed as a prop to set the authenticated state to true
//     } else {
//       alert('Invalid credentials'); // Show an error if credentials are incorrect
//     }
//   };

//   return (
//     <div className="login">
//       <div className="login-card">
//         <h1 className="login-title">Welcome to Application</h1>
//         <p className="login-subtitle">Please log in to your account</p>
//         <form onSubmit={handleSubmit} className="login-form">
//           <div className="input-group">
//             <label className="input-label">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)} // Update username state
//               required
//               placeholder="Enter your username"
//               className="input-field"
//             />
//           </div>
//           <div className="input-group">
//             <label className="input-label">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)} // Update password state
//               required
//               placeholder="Enter your password"
//               className="input-field"
//             />
//           </div>
//           <button type="submit" className="login-btn">Log In</button>
//         </form>
//         <p className="login-footer">Forgot password? <a href="/">Click here</a></p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import '../App.css'; // Adjust path if necessary
import { FaUser, FaLock } from 'react-icons/fa'; // Importing icons

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'password') {
      onLogin(true);  
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login">
      <div className="login-card">
        <h1 className="login-title">Welcome to Application</h1>
        <p className="login-subtitle">Please log in to your account</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label className="input-label">Username</label>
            <div className="input-icon">
              <FaUser className="input-icon-fa" /> {/* Username Icon */}
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
                className="input-field"
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="input-icon">
              <FaLock className="input-icon-fa" /> {/* Password Icon */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="input-field"
              />
            </div>
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <p className="login-footer">Forgot password? <a href="/">Click here</a></p>
      </div>
    </div>
  );
};

export default Login;
