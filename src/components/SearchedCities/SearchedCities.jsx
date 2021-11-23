import React from "react";
import { useSelector } from "react-redux";
import SimpleCard from "../SimpleCard/SimpleCard";
import style from "./SearchedCities.module.css";

const SearchedCities = () => {
	const cities = useSelector(
		(state) => state.searchedCities
	);
	return (
		<div className={style.container}>
			{cities &&
				cities.map((city) => (
					<SimpleCard key={city.id} city={city} />
				))}
		</div>
	);
};

export default SearchedCities;
