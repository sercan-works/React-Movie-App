import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCdNc3WZ37TpDvPDRjPT59el1rU1XFaDVU",
  authDomain: "movie-app-9f103.firebaseapp.com",
  projectId: "movie-app-9f103",
  storageBucket: "movie-app-9f103.appspot.com",
  messagingSenderId: "883527910195",
  appId: "1:883527910195:web:57e0016f437a4d9ef7f446"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

