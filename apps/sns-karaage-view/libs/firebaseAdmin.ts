import admin from 'firebase-admin';
import serviceAccount from ".env/serviceAccountKey.json";
import { firebaseConfig } from ".env/firebase";

const initializeApp = () => {
  console.log("init:firebase admin.")
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as {}),
    storageBucket: firebaseConfig.storageBucket
  });
};

admin.apps.length ? admin.app() : initializeApp();

export const firestore = admin.firestore();
export const storage = admin.storage();
