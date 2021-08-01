const isLogged = (
	state = {
		user: null,
	},
	action
) => {
	switch (action.type) {
		case "SUCCESS":
			return {
				user: action.user,
			};
		case "FAILURE":
			return {
				user: null,
			};
		default:
			return state;
	}
};

export default isLogged;
