import React, { useState } from 'react';
import { Link } from "react-router-dom";

import classes from './index.module.css';

const Nav = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}
	return (
		<div className={`${classes.menu} ${toggle ? classes.open : '' } `} >
			<div className={classes.toggle} onClick={handleToggle}>
				<img src="/hamburger.png" alt="menu button" />
			</div>
			<nav className={classes.nav}>
				<ul>
					<Link to="/" onClick={handleToggle}>
						<li>
							<span>
								All spinners
							</span>
						</li>
					</Link>
					<Link to="/add-spinner" onClick={handleToggle}>
						<li>
							<span>
								New spinner
							</span>
						</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
}

export default Nav;