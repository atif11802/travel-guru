import React from "react";
import "../Styles/Search.css";
import HotelRoom from "./HotelRoom";
import SecondHeader from "./SecondHeader";
import hotelroom1 from "../images/Image/Rectangle 26.png";
import hotelroom2 from "../images/Image/Rectangle 27.png";
import hotelroom3 from "../images/Image/Rectangle 28.png";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
	width: "400px",
	height: "500px",
};

const center = {
	lat: 21.4285,
	lng: 91.9702,
};

const Search = () => {
	return (
		<div className="search">
			<SecondHeader />
			<div className="search__insider">
				<div className="search__left">
					<p>252 stays april 13-17 3 guests</p>
					<h1>stay in Somewhere</h1>
					<HotelRoom
						img={hotelroom1}
						title="light bright airy stylish apt & safe"
					/>
					<HotelRoom
						img={hotelroom2}
						title="apartment in lost panaroma"
					/>
					<HotelRoom
						img={hotelroom3}
						title="AIr lounge and pool"
					/>
				</div>
				<div className="search__right">
					<LoadScript googleMapsApiKey="AIzaSyBBp5MR2unWOOMwYcItpPVTM6m91GfEfSc">
						<GoogleMap
							mapContainerStyle={
								containerStyle
							}
							center={center}
							zoom={10}
						>
							{/* Child components, such as markers, info windows, etc. */}
							<></>
						</GoogleMap>
					</LoadScript>
				</div>
			</div>
		</div>
	);
};

export default Search;
