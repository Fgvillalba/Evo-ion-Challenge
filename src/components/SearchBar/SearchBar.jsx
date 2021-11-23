import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCity } from "../../actions/index";
import style from "./SearchBar.module.css";

const SearchBar = () => {
	const dispatch = useDispatch();
	const searchError = useSelector(
		(state) => state.searchCitiesError
	);
	const [city, setCity] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchCity(city));
		setCity("");
	};

	return (
		<form
			className={style.container}
			onSubmit={handleSubmit}
		>
			<input
				className={style.inputSearch}
				type="text"
				value={city}
				onChange={(e) => setCity(e.target.value)}
				placeholder="Search other cities..."
			/>
			{searchError && <span>{searchError}</span>}
		</form>
	);
};

export default SearchBar;
