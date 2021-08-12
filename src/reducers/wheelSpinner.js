const wheelSpinnersReducer = (wheelSpinners = [], action) => {
	switch(action.type) {
		case 'CREATE':
			return [...wheelSpinners, action.payload];
		case 'FETCH_ONE':
			return action.payload;
		case 'FETCH_ALL':
			return action.payload;
		default: 
			return wheelSpinners;
	}
}

export default wheelSpinnersReducer;