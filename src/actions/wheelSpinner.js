
import * as api from '../api/wheelSpinner';

export const createWheelSpinner = (wheelSpinnerData) => async (dispatch) => {
	try {
		const { data } = await api.createWheelSpinner(wheelSpinnerData);
		dispatch({ type: 'CREATE', payload: data})
	} catch(err) {
		console.log(err);
	}
}

export const getAllWheelSpinners = () => async (dispatch) => {
	try {
		const { data } = await api.getAllWheelSpinners();
		dispatch({ type: 'FETCH_ALL', payload: data})
	} catch(err) {
		console.log(err);
	}
}

export const getSingleWheelSpinner = (id) => async (dispatch) => {
	try {
		const { data } = await api.getSingleWheelSpinner(id);
		dispatch({ type: 'FETCH_ONE', payload: data})
	} catch(err) {
		console.log(err);
	}
}

