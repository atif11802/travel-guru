const details = (
	state = {
		data: null,
	},
	action
) => {
	switch (action.type) {
		case "ITEM":
			return (state = {
				data: action.payload,
			});

		default:
			return state;
	}
};

export default details;
