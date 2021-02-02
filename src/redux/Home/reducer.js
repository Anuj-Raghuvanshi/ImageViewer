import { homeConstants } from './constants';

const initialState = {
	picsForCarousel: [],
	picsForGridView: []
};

const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		case `${homeConstants.GET_IMAGES_FOR_CAROUSEL}_SUCCESS`:
			return { ...state, picsForCarousel: [...action.payload] };
		case `${homeConstants.GET_IMAGES_FOR_GRID_VIEW}_SUCCESS`:
			return { ...state, picsForGridView: [...action.payload] };
		default:
			return state;
	}
}

export default homeReducer;