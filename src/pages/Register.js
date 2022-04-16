import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerInitiate } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2, ImGithub } from 'react-icons/im';
import './Login.css';

const Register = () => {
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
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
	const { email, password, firstName, lastName, passwordConfirm } = state;
	const handleGoogleSignIn = () => {
		dispatch();
	};
	const handChange = (e) => {
		let { name, value } = e.target;
		setState({ ...state, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== passwordConfirm) {
			return;
		}
		dispatch(registerInitiate(email, password, firstName, lastName));
		setState({
			email: '',
			firstName: '',
			lastName: '',
			password: '',
			passwordConfirm: '',
		});
	};
	return (
		<div className='form_container'>
			<div className='form_left'>
				<h1>Welcome Back !</h1>
				<p>To keep connected with us please login with your personal info</p>

				<button className='btn'>
					<Link to='/login'>Sign In</Link>
				</button>
			</div>
			<div className='form_right'>
				<form onSubmit={handleSubmit}>
					<h1>Create Account</h1>
					<div className='icons'>
						<button onClick={handleGoogleSignIn}>
							<FcGoogle className='icon' />
						</button>
						<button onClick={handleGoogleSignIn}>
							<ImFacebook2 className='icon' />
						</button>
						<button onClick={handleGoogleSignIn}>
							<ImGithub className='icon' />
						</button>
					</div>
					<p>or use your email account</p>
					<input
						type='text'
						id='firstName'
						placeholder='First Name'
						name='firstName'
						onChange={handChange}
						value={firstName}
						required
					/>
					<input
						type='text'
						id='lastName'
						placeholder='Last Name'
						name='lastName'
						onChange={handChange}
						value={lastName}
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
					<button className='btn' type='submit'>
						Sign Up
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
