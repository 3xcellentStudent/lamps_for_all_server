require('dotenv').config()
const admin = require('firebase-admin')
const { initializeApp } = require('firebase/app')
// const { getAnalytics } = require("firebase/analytics")
const serviceAccount = require(`../../../lamps-for-all-41ec3-8986d04f6c68.json`)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const firebaseConfig = {
  apiKey: "AIzaSyAs6OtpYytQ97WfOUrGMyaY7ktI5b17l2c",
  authDomain: "lamps-for-all-41ec3.firebaseapp.com",
  projectId: "lamps-for-all-41ec3",
  storageBucket: "lamps-for-all-41ec3.appspot.com",
  messagingSenderId: "83610629981",
  appId: "1:83610629981:web:51e04063cef9590ea31ab4",
  measurementId: "G-8KDGZ7LJZH",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = admin.firestore()

module.exports = db