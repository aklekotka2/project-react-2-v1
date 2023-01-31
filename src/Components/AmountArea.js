import React, { useState } from "react";

const AmountArea = ({ onAcceptAmount }) => {
	const [isPlus, setIsPlus] = useState(true);

	const handleAmount = (event) => {
		parseInt(event.target.value) >= 0 ? setIsPlus(true) : setIsPlus(false);

		onAcceptAmount(event.target.value);
	};

	return (
		<div>
			<label htmlFor="amount">Kwota</label>
			<input
				type="number"
				name="amount"
				id="amount"
				onChange={handleAmount}
			/>
			<div className="err">
				{isPlus ? "" : "Wartość musi być dodatnia"}
			</div>
		</div>
	);
};

export default AmountArea;
