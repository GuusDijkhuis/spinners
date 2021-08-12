import axios from 'axios'

const url = 'https://spinner-gd.herokuapp.com/spinners';

export const createWheelSpinner = (wheelSpinnerData) => axios.post(url, wheelSpinnerData);
export const getAllWheelSpinners = () => axios.get(url);
export const getSingleWheelSpinner = (id) => axios.get(`${url}/${id}`);