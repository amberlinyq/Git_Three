import React from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className='navbar_container'>
			<div className='logo_container'>
				{' '}
				<AiIcons.AiOutlineRobot className='logo narvar_child' />
				<span className='logo_name'>ThreeTech</span>
			</div>

			<nav className='navbar_right'>
				<div className='nav_right'>
					{/* The navbar will show these links before you log in */}
					<Link to='/register'>Sign Up</Link>
					<Link to='/login'>Log In</Link>
				</div>
			</nav>
		</div>
	);
};

/**
 * CONTAINER
 */

export default Navbar;
