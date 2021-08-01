import React from "react";
import "../Styles/Header.css";
import logo from "../images/WhiteLogo.32b27cb5.png";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase.js";
import firebase from "firebase";
import { Link } from "react-router-dom";

const Header = () => {
	let history = useHistory();

	const login = () => {
		history.push("/login");
	};

	const logout = () => {
		firebase.auth()
			.signOut()
			.then(() => {
				history.push("/");
				console.log("logged out");
			})
			.catch((error) => {
				// An error happened.
			});
	};

	const state = useSelector((state) => state);
	console.log(state.isLogged);
	return (
		<div className="header">
			<div className="header__left">
				<div className="header__leftLogo">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className="header__leftInput">
					<SearchIcon />
					<input type="text" />
				</div>
			</div>
			<div className="header__right">
				<ul>
					<li>
						<a href="#">News</a>
					</li>
					<li>
						<a href="#">Destination</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>

				{state.isLogged.user ? (
					<button onClick={logout}>Logout</button>
				) : (
					<button onClick={login}>login</button>
				)}
			</div>
		</div>
	);
};

export default Header;
