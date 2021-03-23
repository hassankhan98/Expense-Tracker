const AppReducer = (state, action) => {
	switch (action.type) {
		case "Delete Transaction":
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction.id !== action.payload
				),
			};
		case "Add transaction":
			return {
				...state,
				transactions: [action.payload, ...state.transactions],
			};
		default:
			return state;
	}
};
export default AppReducer;