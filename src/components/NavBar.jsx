import React from "react";
// import Hamburger from "hamburger-react";
// import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
	return (
		<nav className="nav-bar">
			<Link
				className="nav-bar-item"
				activeClass="active"
				to="project-list"
				spy={true}
				smooth={true}
				duration={500}
			>
				projects
			</Link>
			<Link
				className="nav-bar-item"
				activeClass="active"
				to="about-section"
				spy={true}
				smooth={true}
				duration={700}
			>
				about
			</Link>
			<Link
				className="nav-bar-item"
				activeClass="active"
				to="contact-section"
				spy={true}
				smooth={true}
				duration={1000}
			>
				contact
			</Link>
			<Link
				className="nav-bar-item"
				activeClass="active"
				to="hero-section"
				spy={true}
				smooth={true}
				duration={1000}
			>
				smiley
			</Link>
		</nav>
	);
	// const [isOpen, setOpen] = useState(false);
	// return <Hamburger toggled={isOpen} toggle={setOpen} />;
};

export default NavBar;
