import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'chat-app-6fbf2.firebaseapp.com',
  projectId: 'chat-app-6fbf2',
  storageBucket: 'chat-app-6fbf2.appspot.com',
  messagingSenderId: '824027710970',
  appId: '1:824027710970:web:af41c552a4455ff09d1043'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
