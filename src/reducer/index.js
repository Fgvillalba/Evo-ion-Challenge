import {
	SEARCH_CITY,
	SAERCH_CITY_ERROR,
} from "../actions";

const initialState = {
	searchedCities: undefined,
	searchCitiesError: undefined,
};

function rootReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case SEARCH_CITY:
			return {
				...state,
				searchCitiesError: undefined,
				searchedCities: state.searchedCities
					? [...state.searchedCities, payload]
					: [payload],
			};
		case SAERCH_CITY_ERROR:
			return {
				...state,
				searchCitiesError:
					"No se encontro la ciudad ingresada",
			};
		default:
			return state;
	}
}

export default rootReducer;
