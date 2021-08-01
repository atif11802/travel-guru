import React from "react";
import "../Styles/SecondHeader.css";
import logoblack from "../images/Logo.png";
import Button from "@material-ui/core/Button";
import { auth } from "../firebase";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const SecondHeader = () => {
	const details = useSelector((state) => state);

	console.log(details.isLogged.user);

	const history = useHistory();

	const logout = () => {
		firebase.auth()
			.signOut()
			.then(() => {
				// Sign-out successful.
				history.push("/");
			})
			.catch((error) => {
				// An error happened.
			});
	};
	const login = () => {
		history.push("/login");
	};

	return (
		<div className="secondHeader">
			<div className="secondHeader__left">
				<Link to="/">
					<img src={logoblack} alt="" />
				</Link>
			</div>
			<div className="headerSecond__right">
				<p>news</p>
				<p>destination</p>
				<p>blog</p>
				<p>contact</p>
				{details.isLogged.user ? (
					<Button
						onClick={logout}
						variant="contained"
						color="secondary"
					>
						Logout
					</Button>
				) : (
					<Button
						onClick={login}
						variant="contained"
						color="secondary"
					>
						Login
					</Button>
				)}
			</div>
		</div>
	);
};

export default SecondHeader;
