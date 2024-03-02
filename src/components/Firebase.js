// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBg4K73-fMxBET32h1UcniOKr6ukKwFB8M",
  authDomain: "whitecoatlink.firebaseapp.com",
  projectId: "whitecoatlink",
  storageBucket: "whitecoatlink.appspot.com",
  messagingSenderId: "873838016914",
  appId: "1:873838016914:web:8a8304eaf8d949d922e94b",
  measurementId: "G-ZMLDVFXJGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


