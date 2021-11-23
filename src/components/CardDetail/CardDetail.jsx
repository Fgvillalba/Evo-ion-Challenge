import React, { useEffect, useState } from "react";
import getCity from "../../helpers/getCity";
import style from "../CardDetail/CardDetail.module.css";
import ClimateInfo from "./ClimateInfo/ClimateInfo";
import ClimateToDay from "./ClimateToDay/ClimateToDay";
import { HeaderCard } from "./HeaderCard/HeaderCard";

const CardDetail = () => {
	const [city, setCity] = useState({});

	useEffect(() => {
		getCity("Buenos Aires").then((newCity) => {
			setCity(newCity);
		});
	}, []);

	return city?.main ? (
		<div className={style.container}>
			<HeaderCard
				name={city?.name}
				country={city?.sys?.country}
			/>
			<ClimateToDay
				imgUrl={`http://openweathermap.org/img/wn/${city.weather[0]?.icon}@2x.png`}
				temp={city.main.temp}
				climate={city?.weather[0].main}
			/>
			<ClimateInfo
				tempMin={city.main.temp_min}
				tempMax={city.main.temp_max}
				feelsLike={city.main.feels_like}
				humidity={city.main.humidity}
			/>
		</div>
	) : (
		<div></div>
	);
};

export default CardDetail;
