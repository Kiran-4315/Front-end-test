import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Import Firebase configuration
import { collection, onSnapshot } from 'firebase/firestore';
import './NetworkTree.css';  // Import CSS for styling

const FirestoreData = ({ network }) => {  // Pass network as a prop if needed
  const [data, setData] = useState([]);

  useEffect(() => {
    // Listen for real-time updates from Firestore
    const unsubscribe = onSnapshot(collection(db, "demo"), (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => items.push(doc.data()));
      setData(items);

      // Animate the new node addition
      const lastNode = items[items.length - 1];
      if (lastNode) {
        network.focus(lastNode.id, { scale: 1.8, animation: { duration: 1500, easingFunction: "easeInOutQuad" } });
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [network]); // The `network` instance should be passed from the parent if needed

  return (
    <div>
      <h1>Firestore Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FirestoreData;
