import project1 from "../media/project1.png";
import project2 from "../media/project2.png";
import project3 from "../media/project3.png";
import project4 from "../media/project4.png";
import project5 from "../media/project5.png";
import moa from "../media/moa.png";
import ray from "../media/ray.png";

// PROJECTS DATA
const projectData = [
	{
		id: "6",
		img: ray,
		imgalt: "Ray Atelier website",
		title: "Ray Atelier",
		info: ``,
		info2: "Next | React | Contentful | Figma",
		url: "https://ray-atelier.vercel.app/",
		repo: "", // if no repo, the button will not show up
	},
	{
		id: "7",
		img: moa,
		imgalt: "Moa Hamner website",
		title: "Moa Hamner",
		info: ``,
		info2: "Create-React-App | A-Frame.js | Tone.js | Contentful | Figma",
		url: "https://moa-hamner-react.vercel.app/",
		repo: "", // if no repo, the button will not show up
	},
	{
		id: "1",
		img: project1,
		imgalt: "openshop website",
		title: "openshop.",
		info: `Client brief at Hyper Island. Developing a showcase site for film makers Martin Sandin and Viktor Annerståhl new venture openshop. In collaboration with Neha Hirve, Emma Scott-Allen and Saeid Fattahi`,
		info2: "React | Gatsby | SCSS | Figma | MarkUp",
		url: "https://openshopfilm.com/",
		repo: "https://github.com/sofiadarkeweb/open-shop-x-fun-crew.github.io", // if no repo, the button will not show up
	},
	{
		id: "5",
		img: project5,
		imgalt: "Pomodoro website",
		title: "PomPom-pomodoro",
		info: `A pomodoro work planning app using create-react-app`,
		info2: "React | NPM-packages ",
		url: "https://sofiadarkeweb.github.io/pompom/",
		repo: "https://github.com/sofiadarkeweb/pompom", // if no repo, the button will not show up
	},
	{
		id: "3",
		img: project3,
		imgalt: "Plantfeed website",
		title: "PlantFeed",
		info: `An Hyper Island student project. An habit tracker app that helps your plants thrive! Never forget to 
	  water your plant again, we will help you with that. Fill in everything about your beloved plants and leave the rest to us. In collaboration with Adam Webb and Cecilia Lobo`,
		info2: "HTML | CSS | JavaScript | Figma",
		url: "https://sofiadarkeweb.github.io/habit-tracker/",
		repo: "https://github.com/sofiadarkeweb/habit-tracker", // if no repo, the button will not show up
	},
	{
		id: "2",
		img: project2,
		imgalt: "Sunshine detector website",
		title: "Sunshine Detector",
		info: "An Hyper Island student project using APIs and JavaScript. An app telling you how much time is left before sunset and sunrise in your location. CSS animations and colours-modes depending on time of the day. In collaboration with Cecilia Hallerby, Emma Scott-Allen and Alexandra Rzepecka",
		info2: "HTML | CSS | JavaScript | APIs | Figma",
		url: "https://emmy-codes.github.io/SunshineDetector/mainpage.html",
		repo: "https://github.com/sofiadarkeweb/SunshineDetector", // if no repo, the button will not show up
	},
	{
		id: "4",
		img: project4,
		imgalt: "Paint app website",
		title: "PaintApp",
		info: `An Hyper Island student project. A painting app using Canvas. Pick colours, brush size, erase or delete och perhaps go for the rainbow button.`,
		info2: "HTML | CSS | JavaScript | Canvas ",
		url: "https://sofiadarkeweb.github.io/canvas-paint/",
		repo: "https://github.com/sofiadarkeweb/canvas-paint", // if no repo, the button will not show up
	},
];

export default projectData;
