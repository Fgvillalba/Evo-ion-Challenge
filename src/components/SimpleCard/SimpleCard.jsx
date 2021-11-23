import React from "react";
import style from "./SimpleCard.module.css";

const SimpleCard = ({ city }) => {
	return (
		<div className={style.container}>
			<h3>
				{city.name},{city.sys.country}
			</h3>
			<div className={style.imageContainer}>
				<img
					src={`http://openweathermap.org/img/wn/${city.weather[0]?.icon}@2x.png`}
					alt="iconImage"
				/>
				<side className={style.cardSide}>
					<h4>{city?.weather[0].main}</h4>
					<span>{Math.floor(city.main.temp)}°C</span>
				</side>
			</div>
		</div>
	);
};

export default SimpleCard;
