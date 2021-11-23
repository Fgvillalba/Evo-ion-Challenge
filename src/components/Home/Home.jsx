import React from "react";
import CardDetail from "../CardDetail/CardDetail";
import style from "../Home/Home.module.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchedCities from "../SearchedCities/SearchedCities";

const Home = () => {
	return (
		<div className={style.container}>
			<section className={style.sectionSearch}>
				<SearchBar />
				<SearchedCities />
			</section>
			<CardDetail />
		</div>
	);
};

export default Home;
