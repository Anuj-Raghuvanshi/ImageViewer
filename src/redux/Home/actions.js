import { homeConstants } from './constants';

// export const getImagesForCarousel = () => ({
// 	type: homeConstants.GET_IMAGES_FOR_CAROUSEL,
// });

// export const getImagesForGridView = () => ({
// 	type: homeConstants.GET_IMAGES_FOR_GRID_VIEW,
// });

export const getCarouselImages = dispatch => {
	return () => fetchCarouselData(dispatch);
}

export const getGridImages = dispatch => {
	return () => fetchGridData(dispatch);
}

const fetchCarouselData = async(dispatch) => {
	try {
		const response = await fetch('http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true');
		const res = await response.json();
		dispatch({ type: `${homeConstants.GET_IMAGES_FOR_CAROUSEL}_SUCCESS`, payload: res });
	} catch (e) {
		dispatch({ type: `${homeConstants.GET_IMAGES_FOR_CAROUSEL}_ERROR`, payload: [] });
	}
}

const fetchGridData = async(dispatch) => {
	try {
		const response = await fetch('http://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true');
		const res = await response.json();
		dispatch({ type: `${homeConstants.GET_IMAGES_FOR_GRID_VIEW}_SUCCESS`, payload: res });
	} catch (e) {
		dispatch({ type: `${homeConstants.GET_IMAGES_FOR_GRID_VIEW}_ERROR`, payload: [] });
	}
}