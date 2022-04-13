import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const { currentUser } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!currentUser) {
			navigate('/register');
		}
	}, [currentUser, navigate]);
	const handleAuth = () => {
		dispatch(logoutInitiate());
	};
	return (
		<div>
			Home
			<h2>Welcome !</h2>
			<button onClick={handleAuth}>Log Out</button>
		</div>
	);
};

export default Home;
