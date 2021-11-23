const API_KEY = process.env.REACT_APP_API_KEY;

const getCity = async (city) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
	const response = await fetch(url);
	const searchedCity = await response.json();
	return searchedCity;
};

export default getCity;
