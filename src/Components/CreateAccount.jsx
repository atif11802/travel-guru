import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../Styles/CreateAccount.css";
import SecondHeader from "./SecondHeader";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import firebase from "firebase";

const CreateAccount = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [user, setUser] = useState(null);
	let history = useHistory();
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	const unsubscribe = auth.onAuthStateChanged((authUser) => {
	// 		if (authUser) {
	// 			console.log(authUser);
	// 			dispatch({
	// 				type: "SUCCESS",
	// 				user: authUser,
	// 			});
	// 		} else {
	// 			dispatch({
	// 				type: "FAILURE",
	// 				user: null,
	// 			});
	// 		}
	// 	});
	// 	return () => {
	// 		//perform clean action;
	// 		unsubscribe();
	// 	};
	// }, []);

	const handleCreateAccount = (e) => {
		e.preventDefault();
		// e.preventDefault();
		// console.log(
		// 	firstname,
		// 	lastname,
		// 	email,
		// 	password,
		// 	confirmPassword
		// );
		if (
			firstname &&
			lastname &&
			email &&
			password &&
			confirmPassword
		) {
			const strongRegex = new RegExp(
				"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
			);
			if (strongRegex.test(password)) {
				auth.createUserWithEmailAndPassword(
					email,
					password
				)
					.then((authUser) => {
						return authUser.user.updateProfile(
							{
								displayName:
									firstname +
									" " +
									lastname,
							}
							//
						);
					})
					.catch((error) => alert(error.message));
				setFirstname("");
				setLastname("");
				setEmail("");
				setPassword("");
				setConfirmPassword("");
				history.push("/");
			} else {
				alert(
					"not enough strong password. password must contain 1 lowercase alphabetical,1 uppercase alphabetical,1 numeric character,one special character,and password length should be minimum 1"
				);
			}
		} else {
			alert("fill all the boxes");
		}
	};

	const handleGoogle = () => {
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

	return (
		<div className="createaccount">
			<SecondHeader />
			<div className="createaccount__form">
				<h1>Create an account</h1>
				<form>
					<TextField
						onChange={(e) =>
							setFirstname(
								e.target.value
							)
						}
						id="standard-basic"
						label="First name"
						value={firstname}
					/>
					<TextField
						onChange={(e) =>
							setLastname(
								e.target.value
							)
						}
						id="standard-basic"
						label="Last name"
						value={lastname}
					/>
					<TextField
						onChange={(e) =>
							setEmail(e.target.value)
						}
						id="standard-basic"
						label="email"
						value={email}
					/>
					<TextField
						onChange={(e) =>
							setPassword(
								e.target.value
							)
						}
						id="standard-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
						value={password}
					/>
					<TextField
						onChange={(e) =>
							setConfirmPassword(
								e.target.value
							)
						}
						id="standard-password-input"
						label="confirm Password"
						type="password"
						autoComplete="current-password"
						value={confirmPassword}
					/>
					<button
						type="submit"
						onClick={handleCreateAccount}
					>
						Create an account
					</button>
				</form>
				<p>
					already have an account?
					<span>Login</span>
				</p>
			</div>
			<div className="otherlogin" onClick={handleFacebook}>
				<i className="fab fa-facebook"></i>
				<p>login with Facebook</p>
			</div>
			<div className="otherlogin" onClick={handleGoogle}>
				<i className="fab fa-google"></i>
				<p>login with Google</p>
			</div>
		</div>
	);
};

export default CreateAccount;
