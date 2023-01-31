const CurrencyArea = ({ onAcceptCurrency, currency }) => {
	const handleCurrency = (event) => {
		onAcceptCurrency(event.target.value);
	};

	return (
		<div>
			<label htmlFor="currency">Waluta</label>
			<select
				name="currency"
				id="currency"
				value={currency}
				onChange={handleCurrency}
			>
				<option value="EUR">EUR</option>
				<option value="USD">USD</option>
				<option value="CHF">CHF</option>
			</select>
		</div>
	);
};

export default CurrencyArea;
