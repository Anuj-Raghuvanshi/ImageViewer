import { createStore } from 'redux';

import homeReducer from '../redux/Home/reducer';

const configureStore = () => {
	return createStore(homeReducer, undefined);
}

export default configureStore;