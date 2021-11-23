import React from "react";
import style from "./ClimateSpan.module.css";

const ClimateSpan = ({ num, unit, text }) => {
	return (
		<div className={style.container}>
			<span className={style.span1}>
				{Math.floor(num)}
				{unit}
			</span>
			<span>{text}</span>
		</div>
	);
};

export default ClimateSpan;
