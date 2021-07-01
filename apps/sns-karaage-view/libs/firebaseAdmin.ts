import admin from 'firebase-admin';
import serviceAccount from ".env/serviceAccountKey.json";

const initializeApp = () => {
  console.log("init:firebase admin.")
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as {}),
    storageBucket: 'sns-karaage.appspot.com'
  });
};

admin.apps.length ? admin.app() : initializeApp();

export const firestore = admin.firestore();
export const bucket = admin.storage().bucket();
