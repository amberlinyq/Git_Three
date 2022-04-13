import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { auth, onAuthStateChanged } from './firebase';
import {SetUser } from './redux/action';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		onAuthStateChanged(auth, (authUser) => {
			if (authUser) {
				dispatch(SetUser(authUser));
			}else{
				dispatch(SetUser(null))
			}
		});
	}, [dispatch]);
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route exact path='/' element={<Home />} />

					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
