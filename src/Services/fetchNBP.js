const urlAddress =
	"https://api.nbp.pl/api/exchangerates/tables/a/?format=json/";
const apiNbp = fetch(urlAddress).then((response) => response.json());

export { apiNbp };
