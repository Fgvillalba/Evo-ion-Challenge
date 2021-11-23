import React from "react";
import style from "./ClimateInfo.module.css";
import ClimateSpan from "./ClimateSpan/ClimateSpan";

const ClimateInfo = ({
	tempMin,
	tempMax,
	feelsLike,
	humidity,
}) => {
	return (
		<section className={style.container}>
			<ClimateSpan
				num={tempMin}
				unit="°C"
				text="Temp.minimun"
			/>
			<ClimateSpan
				num={tempMax}
				unit="°C"
				text="Temp.maximun"
			/>
			<ClimateSpan
				num={feelsLike}
				unit="°C"
				text="Feels like"
			/>
			<ClimateSpan
				num={humidity}
				unit="%"
				text="Humidity"
			/>
		</section>
	);
};

export default ClimateInfo;
