import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import projectData from "./components/projectdata";

function App() {
	return (
		<div className="App">
			<Hero />
			<Projects />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;