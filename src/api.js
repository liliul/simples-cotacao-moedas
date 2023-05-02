/**
 * use: USD-BRL -> USDBRL -> dolar/real 
 * use: EUR-BRL -> EURBRL -> euro/real
 */

async function getApiCotacao() {
	const req = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL');
	const res = await req.json();

	console.log(res)
	const ver = res.EURBRL;

	const output = `
		<h2 class='amount'>${ver.name}</h2>

		<p class='amount-text'><b class='amount'>Alta $</b>${ver.high}</p>

		<p class='amount-text'><b class='amount'>Baixa $</b>${ver.low}</p>

		<span class='amount-text'><b class='amount'>DATA: </b>${ver.create_date}</span>

	`
	document.getElementById('value-da-api').innerHTML = output; 
}
getApiCotacao()