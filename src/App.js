import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Booking from "./Components/Booking";
import Search from "./Components/Search";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
	const details = useSelector((state) => state);
	console.log(details);

	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log(authUser);
				dispatch({
					type: "SUCCESS",
					user: authUser,
				});
			} else {
				dispatch({
					type: "FAILURE",
					user: null,
				});
			}
		});
		return () => {
			//perform clean action;
			unsubscribe();
		};
	}, []);

	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/createaccount">
						<CreateAccount />
					</Route>

					<Route exact path="/search">
						<Search />
					</Route>

					<Route exact path="/">
						<div className="app__bg">
							<Header />
							<Content />
						</div>
					</Route>
					<Route exact path="/booking">
						<div className="app__bg">
							<Header />
							<Booking />
						</div>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
