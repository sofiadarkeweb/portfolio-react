import { Link } from "react-scroll";

export const Arrow = () => {
	return (
		<div className="arrow-fixed">
			<Link
				className="arrow-up"
				href="/home"
				activeClass="active"
				to="hero-section"
				spy={true}
				smooth={true}
				duration={1000}
			>
				<i className="arrow up"></i>
			</Link>
		</div>
	);
};
