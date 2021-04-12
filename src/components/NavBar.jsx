import React from "react";
// import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
	return (
		<nav className="nav-bar">
			<Link
				className="project"
				activeClass="active"
				to="project-list"
				spy={true}
				smooth={true}
				duration={500}
			>
				projects
			</Link>
			<Link
				className="about"
				activeClass="active"
				to="about-section"
				spy={true}
				smooth={true}
				duration={700}
			>
				about
			</Link>
			<Link
				className="contact"
				activeClass="active"
				to="contact-section"
				spy={true}
				smooth={true}
				duration={1000}
			>
				contact
			</Link>
		</nav>
	);
	// const [isOpen, setOpen] = useState(false);
	// return <Hamburger toggled={isOpen} toggle={setOpen} />;
};

export default NavBar;
