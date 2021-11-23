import React from "react";
import style from "./ClimateToDay.module.css";

const ClimateToDay = ({ imgUrl, temp, climate }) => {
	return (
		<div className={style.container}>
			<div>
				<img src={imgUrl} alt="iconImage" />
			</div>
			<section>
				<span className={style.temp}>
					{Math.floor(temp)}°C
				</span>
				<span className={style.climate}>{climate}</span>
			</section>
		</div>
	);
};

export default ClimateToDay;
