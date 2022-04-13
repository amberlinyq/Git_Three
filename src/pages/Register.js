import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { registerInitiate } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [state, setState] = useState({
		displayName: '',
		email: '',
		password: '',
		passwordConfirm: '',
	});
	const { currentUser } = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (currentUser) {
			navigate('/');
		}
	}, [currentUser, navigate]);
	const dispatch = useDispatch();
	const { email, password, displayName, passwordConfirm } = state;
	const handChange = (e) => {
		let { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== passwordConfirm) {
			return;
		}
		dispatch(registerInitiate(email, password, displayName));
		setState({ email: '', displayName: '', password: '', passwordConfirm: '' });
	};
	return (
		<div>
			<div>
				<form onSubmit={handleSubmit}>
					<h1>Sign Up</h1>

					<input
						type='text'
						id='displayName'
						placeholder='Full Name'
						name='displayName'
						onChange={handChange}
						value={displayName}
						required
					/>
					<input
						type='email'
						id='inputEmail'
						placeholder='Email Address'
						name='email'
						onChange={handChange}
						value={email}
						required
					/>
					<input
						type='password'
						id='inputPassword'
						placeholder='Password'
						name='password'
						onChange={handChange}
						value={password}
						required
					/>
					<input
						type='password'
						id='inputPassword'
						placeholder='Repeat Password'
						name='passwordConfirm'
						onChange={handChange}
						value={passwordConfirm}
						required
					/>
					<button type='submit'>Sign Up</button>

					<Link to='/login'>Sign In</Link>
				</form>
			</div>
		</div>
	);
};

export default Register;
