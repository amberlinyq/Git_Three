import * as firebase from 'firebase/app';
import 'firebase/auth';
import {
	getAuth,
	GoogleAuthProvider,
	FacebookAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB8svp1xTorEBboyOL3Kzf6nw711A_7-rY',
	authDomain: 'git-three.firebaseapp.com',
	projectId: 'git-three',
	storageBucket: 'git-three.appspot.com',
	messagingSenderId: '634085256782',
	appId: '1:634085256782:web:0ac06ebe34cd4ddf641d1f',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
console.log('app=====', app);
console.log('auth======', auth);


// const listAllUsers = (nextPageToken) => {
// 	getAuth()
// 		.listUsers(1000, nextPageToken)
// 		.then((listUsersResult) => {
// 			listUsersResult.users.forEach((userRecord) => {
// 				console.log('user', userRecord.toJSON());
// 			});
// 			if (listUsersResult.pageToken) {
// 				listAllUsers(listUsersResult.pageToken);
// 			}
// 		})
// 		.catch((error) => {
// 			console.log('Error listing users:', error);
// 		});
// };

// listAllUsers();

const googleAuthProvider = new GoogleAuthProvider();
const favebookAuthProvider = new FacebookAuthProvider();

export {
	auth,
	googleAuthProvider,
	favebookAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithPopup,
};
