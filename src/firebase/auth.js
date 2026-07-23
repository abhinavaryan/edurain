import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from './config.js';
import { saveUserToFirestore } from './firestore.js';

export const registerUser = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName: name });
    await saveUserToFirestore(user.uid, name, email);
    return user;
  } catch (error) {
    throw new Error(error.message || 'Registration failed');
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message || 'Logout failed');
  }
};

export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};
