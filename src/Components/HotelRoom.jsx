import React from "react";
import "../Styles/HotelRoom.css";

const HotelRoom = ({ img, title }) => {
	return (
		<div className="hotelroom">
			<div className="hotelroom__left">
				<img src={img} alt="" />
			</div>
			<div className="hotelroom__right">
				<h1>{title}</h1>
				<ul>
					<li>4 guests</li>
					<li>2 bedrooms</li>
					<li>2 beds</li>
					<li>2 baths</li>
				</ul>
				<p>cool breezing ac</p>
				<p>cancellation flexibility available</p>
				<div className="hotelroom__rightRating">
					<p>⭐ 4.9(20)</p>
					<p>
						<span>$34</span>/night
					</p>
					<p>$167 total</p>
				</div>
			</div>
		</div>
	);
};

export default HotelRoom;
