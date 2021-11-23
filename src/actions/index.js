const API_KEY = process.env.REACT_APP_API_KEY;
export const SEARCH_CITY = "SEARCH_CITY";
export const SAERCH_CITY_ERROR = "SAERCH_CITY_ERROR";

export function searchCity(payload) {
	return async function (dispatch) {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}&units=metric`;
		const response = await fetch(url);
		const searchedCity = await response.json();
		if (searchedCity.id) {
			dispatch({
				type: SEARCH_CITY,
				payload: searchedCity,
			});
		} else {
			dispatch({ type: SAERCH_CITY_ERROR });
		}
	};
}
