import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwCF6FzoELpapVTnE5XIevobOfhqr8KT8",
  authDomain: "clone2-ae665.firebaseapp.com",
  projectId: "clone2-ae665",
  storageBucket: "clone2-ae665.appspot.com",
  messagingSenderId: "262656006925",
  appId: "1:262656006925:web:77bc5025d38a2209f12e44",
  measurementId: "G-T3756D69KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebaseConfig