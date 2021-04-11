import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";

const NavBar = () => {
	return (
		<ul className="nav-bar">
			<a href="#projects">
				<li>Projects</li>
			</a>
			<li>About</li>
			<li>Contact</li>
		</ul>
	);
	// const [isOpen, setOpen] = useState(false);
	// return <Hamburger toggled={isOpen} toggle={setOpen} />;
};

export default NavBar;

{
}
