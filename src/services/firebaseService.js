import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export const createDemoDocument = async (data) => {
  try {
    await addDoc(collection(db, "demo"), data);
  } catch (error) {
    console.error("Error adding document to Firestore:", error);
  }
};
