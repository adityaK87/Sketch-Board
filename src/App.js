import React from "react";
import "./styles/tailwind.css";
import Menu from "./components/Menu";
import Toolbox from "./components/Toolbox";
import Board from "./components/Board";
const Home = () => {
	return (
		<>
			<Menu />
			<Toolbox />
			<Board />
		</>
	);
};

export default Home;
