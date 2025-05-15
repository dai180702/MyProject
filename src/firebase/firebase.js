// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";            // ✨ Thêm dòng này
import { getFirestore } from "firebase/firestore";   // ✨ Thêm dòng này

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOyUzIUJ6dZmtaWNEVrQvvxguzTEQx2jA",
  authDomain: "myproject-f58ff.firebaseapp.com",
  databaseURL: "https://myproject-f58ff-default-rtdb.firebaseio.com",
  projectId: "myproject-f58ff",
  storageBucket: "myproject-f58ff.appspot.com", // sửa lỗi nhỏ ở đây nữa nè (storageBucket bị sai)
  messagingSenderId: "773999767750",
  appId: "1:773999767750:web:b09d2c355044d02f9aa7c7",
  measurementId: "G-S2KZS5PFBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✨ Thêm Auth và Firestore:
export const auth = getAuth(app);
export const db = getFirestore(app);

// Nếu cần thì cũng export app ra
export { app };
