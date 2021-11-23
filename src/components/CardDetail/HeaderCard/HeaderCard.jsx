import React from "react";
import style from "./HeaderCard.module.css";

export const HeaderCard = ({ name, country }) => {
	return (
		<header className={style.container}>
			<span className={style.span}>Current city</span>
			<h2 className={style.title}>
				{name}, {country}
			</h2>
		</header>
	);
};
