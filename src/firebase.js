import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAkoAGXj6P1HDmSY_5E-8nr18AjI9fKdWA",
	authDomain: "travel-guru-86e53.firebaseapp.com",
	projectId: "travel-guru-86e53",
	storageBucket: "travel-guru-86e53.appspot.com",
	messagingSenderId: "798829063266",
	appId: "1:798829063266:web:cdfe3a57a3edd7fe37f53b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
