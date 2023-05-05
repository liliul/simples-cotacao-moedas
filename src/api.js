/**
 * use: USD-BRL -> USDBRL -> dolar/real 
 * use: EUR-BRL -> EURBRL -> euro/real
 */


window.addEventListener('change', getApiCotacao)
getApiCotacao()
async function getApiCotacao() {
	const req = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,USD-JPY,BTC-USD');
	const res = await req.json();

	console.log(res)
	
	const idSelect = document.getElementById('id-select');

	const isOption = idSelect.options[idSelect.selectedIndex];
	let isOptionText = Number(isOption.value); 
	console.log(isOptionText)
	const element = res.USDBRL;	
	html(element)

	if (isOptionText === 0) {
		html(res.USDBRL)
	}else if(isOptionText === 1) {
		html(res.EURBRL)
	}else if(isOptionText === 2) {
		html(res.BTCBRL)
	}else if(isOptionText === 3) {
		html(res.USDJPY)
	}else if(isOptionText === 4) {
		html(res.BTCUSD)
	}
	
}

function html(element) {
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
	const simbolos = ['USDBRL','EURBRL','BTCBRL','USDJPY','BTCUSD'];

	simbolos.map((simbolo,index) => {createOptions(simbolo,index)})
}
addOptions()

let gerar = 0;
function createOptions(textOption,valueOption) {
	const idSelect = document.getElementById('id-select');

	const options = document.createElement('option');
	options.text  = textOption;
	options.value = valueOption;
	idSelect.add(options, null);
}