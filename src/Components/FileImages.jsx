import React, { useState } from "react";
import sample from "../images/Image/sundorbon.png";
import "../Styles/FileImages.css";
import { useSelector, useDispatch } from "react-redux";

const FileImages = ({ area }) => {
	const [active, setActive] = useState(false);
	const details = useSelector((state) => state);
	const dispatch = useDispatch();

	const getData = (area) => {
		dispatch({ type: "ITEM", payload: area });
		if (active === false) {
			setActive(true);
		} else {
			setActive(false);
		}
	};

	return (
		<div
			className={
				active === true
					? "fileImages active"
					: "fileImages"
			}
			onClick={() => getData(area)}
		>
			<img src={area.img} alt="" />
		</div>
	);
};

export default FileImages;
