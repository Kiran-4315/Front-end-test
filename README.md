Interactive Network Tree Visualization
Overview
This project is a single-page application (SPA) that includes a login page and a main page displaying an interactive network tree visualization. It is built using React and integrates with Firebase Firestore for real-time data management. Users can interact with the network tree by adding, deleting, and searching for nodes. The visualization updates in real-time, and authenticated users can view and manipulate the tree.

Features
Login Page: Users log in with credentials to access the network tree.
Interactive Network Tree: Visualization of nodes connected by edges with options to interact, add, delete, and search nodes.
Real-Time Updates: All changes to nodes are synced in real-time with Firebase Firestore.
Node Interaction: Users can click on nodes to view more details and focus on specific nodes.
Zoom and Pan: The network tree supports zooming and panning for easy navigation.
Technologies Used
React: Front-end framework.
Firebase: Firestore for real-time database and data management.
Vis.js (vis-network): Library used to create the interactive network tree.
CSS: For responsive and modern design.
Project Setup Instructions
Prerequisites
Ensure you have the following installed:

Node.js: https://nodejs.org
Firebase Project: Set up a Firebase project and obtain the configuration details.
Firebase Setup
Create a Firebase project at Firebase Console.
Enable Firestore in the Firebase project.
Obtain your Firebase configuration details and update them in src/firebaseConfig.js as shown below:
js
Copy code
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/network-tree-visualization.git
cd network-tree-visualization
Install the required dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The application will now run at http://localhost:3000.

Deploying to Production
Build the project:

bash
Copy code
npm run build
Deploy the build folder to your hosting service (e.g., Firebase Hosting, Vercel, Netlify).

Usage
Login
The login form requires the following credentials for access:
Username: admin
Password: password
Interactive Network Tree
Add Nodes: Click on the "Add Node" button to create a new node.
Delete Nodes: Select a node and click "Delete Node" to remove it.
Search for Nodes: Use the search bar to find and highlight specific nodes by name.
Zoom and Pan: Scroll or use the zoom buttons to navigate the network.
Project Structure
bash
Copy code
src/
│
├── components/
│   ├── Login.js           # Login form component
│   ├── Header.js          # Header with user details and logout button
│   ├── NetworkTree.js     # Network visualization component
│   └── Loading.js         # Loading spinner
│
├── services/
│   └── firebaseService.js # Firestore interaction logic
│
├── App.js                 # Main application file
├── firebaseConfig.js       # Firebase configuration file
└── index.js               # React app entry point
Available Scripts
In the project directory, you can run:

npm start: Runs the app in development mode at http://localhost:3000.
npm run build: Builds the app for production in the build folder.
Performance Optimizations
Efficient State Management: The app uses React hooks (useState, useEffect) and Firebase Firestore listeners to manage state and ensure real-time updates without excessive re-renders.
Optimized Rendering: The use of Vis.js ensures smooth rendering and interaction even with larger datasets.
Error Handling
Error Boundary: The app includes an ErrorBoundary component to catch errors during rendering and display user-friendly messages.
Authentication Errors: If login credentials are incorrect, the app displays appropriate error messages.
Future Improvements
Enhanced Animations: Add smoother transitions and animations when nodes are added, removed, or searched.
Advanced User Authentication: Implement Firebase Authentication for better user management.
Node Expansion: Allow nodes to have children dynamically added and displayed.
License
This project is licensed under the MIT License. See the LICENSE file for details.