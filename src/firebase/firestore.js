import { doc, setDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './config.js';

export const saveUserToFirestore = async (uid, name, email) => {
  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, {
      name,
      email,
      created_at: serverTimestamp()
    });
  } catch (error) {
    throw new Error('Could not save user data: ' + error.message);
  }
};

export const saveContactMessage = async (name, email, message) => {
  try {
    const contactsRef = collection(db, 'contacts');
    await addDoc(contactsRef, {
      name,
      email,
      message,
      created_at: serverTimestamp()
    });
  } catch (error) {
    throw new Error('Could not send message: ' + error.message);
  }
};
