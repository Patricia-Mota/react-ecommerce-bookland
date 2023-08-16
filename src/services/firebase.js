// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj6QYCYdQljXZIhmDRdlpXeq4NBXlSR5A",
  authDomain: "bookland-e-commerce.firebaseapp.com",
  projectId: "bookland-e-commerce",
  storageBucket: "bookland-e-commerce.appspot.com",
  messagingSenderId: "147465973841",
  appId: "1:147465973841:web:e1cb9dd699411264814870",
  measurementId: "G-TJ3BHLH2NZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

// Implementar async function getData
async function getData() {
  const booksRef = collection(db, "books");
  const documentsSnapshot = await getDocs(booksRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => {
    return { ...item.data(), id: item.id };
  });
  return docsData;
}

// Implementar async function getLibroData
async function getLibroData(id) {
  const docRef = doc(db, "books", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese libro.");
  }
}

// Implementar getCategoryData
async function getCategoryData(category) {
  const booksRef = collection(db, "books");

  const q = query(booksRef, where("categoria", "==", category));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const docCreated = await addDoc(collectionRef, orderData);

  return docCreated.id;
}

async function getOrder(id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
}

export { getData, getOrder, getLibroData, getCategoryData, createOrder };
