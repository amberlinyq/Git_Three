import * as types from './actionType';
import {
	auth,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut,
	googleAuthProvider,
	signInWithPopup,
} from '../firebase';

const registerStart = () => ({
	type: types.REGISTER_START,
});
const registerSuccess = (user) => ({
	type: types.REGISTER_SUCCESS,
	payload: user,
});
const registerFail = (error) => ({
	type: types.REGISTER_FAIL,
	payload: error,
});
const loginStart = () => ({
	type: types.LOGIN_START,
});
const loginSuccess = (user) => ({
	type: types.LOGIN_SUCCESS,
	payload: user,
});

const loginFail = (error) => ({
	type: types.LOGIN_FAIL,
	payload: error,
});

const googleSignInStart = () => ({
	type: types.GOOGLE_SIGN_IN_START,
});
const googleSignInSuccess = (user) => ({
	type: types.GOOGLE_SIGN_IN_SUCCESS,
	payload: user,
});

const googleSignInFail = (error) => ({
	type: types.GOOGLE_SIGN_IN_FAIL,
	payload: error,
});

const logoutStart = () => ({
	type: types.LOGOUT_START,
});
const logoutSuccess = (user) => ({
	type: types.LOGOUT_SUCCESS,
	payload: user,
});

const logoutFail = (error) => ({
	type: types.LOGOUT_FAIL,
	payload: error,
});

export const SetUser = (user) => ({
	type: types.SET_USER,
	payload: user,
});

export const registerInitiate = (email, password, displayName) => {
	return function (dispatch) {
		dispatch(registerStart());
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				updateProfile(user, {
					displayName,
				});
				dispatch(registerSuccess(user));
			})
			.catch((error) => dispatch(registerFail(error.message)));
	};
};
export const loginInitiate = (email, password) => {
	console.log('signInWithEmailAndPassword=====', signInWithEmailAndPassword);
	return function (dispatch) {
		dispatch(loginStart());
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(loginSuccess(user));
			})
			.catch((error) => dispatch(loginFail(error.message)));
	};
};
export const googleSignInInitiate = () => {
	console.log('signInWithEmailAndPassword=====', signInWithEmailAndPassword);
	return function (dispatch) {
		dispatch(googleSignInStart());
		signInWithPopup(auth, googleAuthProvider)
			.then(({ user }) => {
				dispatch(googleSignInSuccess(user));
			})
			.catch((error) => dispatch(googleSignInFail(error.message)));
	};
};
export const logoutInitiate = () => {
	console.log('signOut=====', signOut);
	return function (dispatch) {
		dispatch(logoutStart());
		auth
			.signOut()
			.then(() => {
				dispatch(logoutSuccess());
			})
			.catch((error) => dispatch(logoutFail(error.message)));
	};
};
