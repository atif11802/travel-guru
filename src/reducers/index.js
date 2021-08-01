import details from "./details";
import isLogged from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	details,
	isLogged,
});

export default allReducers;
