import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../Styles/Booking.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

const Booking = () => {
	const classes = useStyles();
	const details = useSelector((state) => state);
	console.log(details.details.data.title);

	const [origin, setOrigin] = useState();
	const [destination, setDestination] = useState(
		details.details.data.title
	);

	let history = useHistory();

	const search = () => {
		if (origin && destination) {
			if (details.isLogged.user) {
				history.push("/search");
			} else {
				history.push("/login");
			}
		} else {
			// alert(origin && destination);
			alert("vai origin ta to likh.. pura kaj kore disi");
		}
	};

	return (
		<div className="booking">
			<div className="booking__left">
				<h1>
					{details.details?.data &&
						details.details.data.title}
				</h1>
				<p>
					{details.details?.data &&
						details.details.data
							.Description}
				</p>
			</div>
			<div className="booking__right">
				<p>Origin</p>
				<input
					type="text"
					value={origin}
					onChange={(e) =>
						setOrigin(e.target.value)
					}
				/>
				<p>Destination</p>
				<input
					type="text"
					value={
						details.details?.data &&
						destination
					}
				/>
				<div className="boooking__dates">
					<div className="booking__datesfrom">
						<p>From</p>
						<form
							className={
								classes.container
							}
							noValidate
						>
							<TextField
								id="date"
								type="date"
								defaultValue="2017-05-24"
								className={
									classes.textField
								}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</form>
					</div>
					<div className="booking__datesto">
						<p>To</p>
						<form
							className={
								classes.container
							}
							noValidate
						>
							<TextField
								id="date"
								type="date"
								defaultValue="2017-05-24"
								className={
									classes.textField
								}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</form>
					</div>
				</div>
				<button onClick={search}>Start Booking</button>
			</div>
		</div>
	);
};

export default Booking;
