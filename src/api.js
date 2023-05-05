/**
 * use: USD-BRL -> USDBRL -> dolar/real 
 * use: EUR-BRL -> EURBRL -> euro/real
 */

async function getApiCotacao() {
	const req = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL');
	const res = await req.json();

	console.log(res)
	const element = res.USDBRL;

	
	const output = `
	<h2 class='amount'>${element.name}</h2>

	<p class='amount-text'><b class='amount'>Alta $</b>${element.high}</p>

	<p class='amount-text'><b class='amount'>Baixa $</b>${element.low}</p>

	<p class='amount-text'><b class='amount'>bid $</b>${element.bid}</p>
	
	<p class='amount-text'><b class='amount'>ask $</b>${element.ask}</p>

	<span class='amount-text'><b class='amount'>DATA: </b>${element.create_date}</span>

`
	document.getElementById('value-da-api').innerHTML = output;
	
	 
}
function addOptions() {
	const simbolos = ['USD','BRL','EUR','JPY'];

	simbolos.map((simbolo) => {createOptions(simbolo)})
}
addOptions()
function createOptions(textOption) {
	const idSelect = document.getElementById('id-select');

	const options = document.createElement('option');
	options.text = textOption
	idSelect.add(options, null);
}

getApiCotacao()