import React from 'react';
import './LandingPage.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const LandingPage = (props) => {
	return (
		<div className='landing_container'>
			<Navbar />
			<video src='todo3.mp4' autoPlay loop muted />
			<div className='intro_container'>
				<h1 className='intro_header'>
					Stay Creative
					<br />
					Stay Organized{' '}
				</h1>
				<p className='intro_text'>
					Join millions of people to capture ideas, organize life, and do
					something creative everyday.
				</p>
				<Link className='intro_btn' to='/register'>
					Get Started
				</Link>
			</div>
		</div>
	);
};

/**
 * CONTAINER
 */


export default LandingPage;
