import React, { useEffect, useState } from "react";
import "../Styles/Content.css";
import data from "../data.js";
import FileImages from "./FileImages";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Content = () => {
	const [areas, setAreas] = useState([]);
	const details = useSelector((state) => state);

	useEffect(() => {
		// fetch(
		// 	"https://mocki.io/v1/05c6e914-3645-4581-a7cb-0d72c0ccd9bc"
		// )
		// 	.then((res) => {
		// 		return res.json();
		// 	})
		// 	.then((data) => {
		// 		console.log(data);
		// 		setAreas(data.data);
		// 	});
		setAreas(data);
	}, []);

	console.log(details.details);
	return (
		<div className="content">
			<div className="content__main">
				<div className="content__mainLeft">
					<h1>
						{details.details.data &&
							details.details.data
								.title}
					</h1>
					<p>
						{details.details.data &&
							details.details.data
								.Description}
					</p>

					{details.details.data && (
						<Link to="/booking">
							<button>Booking</button>
						</Link>
					)}
				</div>
				<div className="content__mainRight">
					{areas.length &&
						areas.map((area, ind) => (
							<FileImages
								key={ind}
								area={area}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default Content;
