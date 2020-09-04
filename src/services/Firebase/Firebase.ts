import firebase from 'firebase'
import admin from 'firebase-admin';
import 'firebase/auth'

const serviceAccount = require("../../../../key/covinfo-cdf17-firebase-adminsdk-oueyv-ff29c8f456.json");

// const firebaseConfig = {
// 	apiKey: "AIzaSyD9rjalcSyKkAALieIhV0Qeb2Uyo1eiG3c",
// 	authDomain: "covinfo-cdf17.firebaseapp.com",
// 	databaseURL: "https://covinfo-cdf17.firebaseio.com/",
// 	projectId: "covinfo-cdf17",
// 	storageBucket: "covinfo-cdf17.appspot.com",
// 	messagingSenderId: "619747978997",
// 	appId: "1:619747978997:web:cd8ff76ec2c6ada67c9fbc"
// }



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://covinfo-cdf17.firebaseio.com"
});

const FirebaseProvider = () => {
	return admin
}

export default FirebaseProvider