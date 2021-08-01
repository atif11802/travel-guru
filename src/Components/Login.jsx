import React, { useState } from "react";
import "../Styles/Login.css";
import SecondHeader from "./SecondHeader";
import TextField from "@material-ui/core/TextField";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let history = useHistory();

	const login = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				history.push("/");

				// ...
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				alert(errorMessage);
			});

		setEmail("");
		setPassword("");
	};

	const handleGoogle = () => {
		console.log("g");
		console.log("handleGoogle");
		var provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;

				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				console.log(user);
				// ...
				history.push("/");
			})
			.catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
	};

	const handleFacebook = () => {
		console.log("f");
		var provider = new firebase.auth.FacebookAuthProvider();
		firebase.auth()
			.signInWithPopup(provider)
			.then((result) => {
				/** @type {firebase.auth.OAuthCredential} */
				var credential = result.credential;

				// The signed-in user info.
				var user = result.user;

				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				var accessToken = credential.accessToken;
				console.log(user);
				history.push("/");

				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				alert(error);

				// ...
			});
	};

	const createaccount = () => {
		history.push("/createaccount");
	};

	return (
		<div className="login">
			<SecondHeader />
			<div className="login__form">
				<form>
					<h1>Login</h1>
					<TextField
						onChange={(e) =>
							setEmail(e.target.value)
						}
						id="standard-basic"
						label="Email"
						value={email}
					/>
					<TextField
						onChange={(e) =>
							setPassword(
								e.target.value
							)
						}
						value={password}
						id="standard-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
					/>
					<div className="login__formRemember">
						<div className="login__formRememberCheck">
							<input type="checkbox" />
							<p>Remember me</p>
						</div>
						<div className="login__formRememberRemember">
							<p>forgot password</p>
						</div>
					</div>
					<button type="submit" onClick={login}>
						Login
					</button>
					<p>
						Don't have an account?
						<span onClick={createaccount}>
							create Account
						</span>
					</p>
				</form>
			</div>
			<div className="login__other">
				<div className="login__otherOr">Or</div>
				<div
					className="login__otherfb"
					onClick={handleFacebook}
				>
					<i className="fab fa-facebook"></i>
					<p>Continue with Facebook</p>
				</div>
				<div
					className="login__otherGoogle"
					onClick={handleGoogle}
				>
					<i className="fab fa-google"></i>
					<p>Continue with Google</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
