import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginInitiate, googleSignInInitiate } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2, ImGithub } from 'react-icons/im';
import './Login.css';
import { Button, Box } from "../utilities";


const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();


	useEffect(() => {
		if (currentUser) {
			navigate('/home');
		}
	}, [currentUser, navigate]);
	const dispatch = useDispatch();
	const { email, password } = state;
	const handChange = (e) => {
		let { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	const handleGoogleSignIn = () => {
		dispatch(googleSignInInitiate());
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			return;
		}
		dispatch(loginInitiate(email, password));
		setState({ email: '', password: '' });
	};
	return (
		<div className='form_container'>
			<div className='form_left'>
				<h1>Hello Friend !</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className='btn'>
					<Link to='/register'>Sign Up</Link>
				</button>
			</div>
			<div className='form_right'>
				<form onSubmit={handleSubmit}>
					<h1>Sign in to Git_Three</h1>

					<div className='icons'>
             <Box justify={"center"}>            
            <Button onClick={handleGoogleSignIn} text={"Google"} />
              <FcGoogle className='icon' />
          </Box>
						<button onClick={handleGoogleSignIn}>
							<ImFacebook2 className='icon' />
						</button>
						<button onClick={handleGoogleSignIn}>
							<ImGithub className='icon' />
						</button>
					</div>
					<p>or use your email account</p>

					<input
						type='email'
						id='inputEmail'
						placeholder='Email'
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
					<p>Forgot your password?</p>
					<button className='btn' type='submit'>
						SIGN IN
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
