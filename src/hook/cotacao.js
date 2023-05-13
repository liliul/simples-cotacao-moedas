/**
 * use: USD-BRL -> USDBRL -> dolar/real 
 * use: EUR-BRL -> EURBRL -> euro/real
 */

const idSelect = document.getElementById('id-select');

idSelect.addEventListener('change', getApiCotacao)
getApiCotacao()

async function getApiCotacao() {
	const req = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,USD-JPY,BTC-USD,USD-ARS,BRL-ARS');
	const res = await req.json();

	const element = res.USDBRL;	
	html(element)

	selecionarMoeda(res)
}

function selecionarMoeda(res) {
	const isOption = idSelect.options[idSelect.selectedIndex];
	const isOptionText = Number(isOption.value); 

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
	}else if(isOptionText === 5) {
		html(res.USDARS)
	}else if(isOptionText === 6) {
		html(res.BRLARS)
	}
}

function html(element) {
	const output = `
	<h2 class='amount'>${element.name}</h2>

	<p class='amount-text'><b class='amount'>Alta $</b>${Number(element.high).toFixed(2)}</p>

	<p class='amount-text'><b class='amount'>Baixa $</b>${Number(element.low).toFixed(2)}</p>
	
	<p class='amount-text'><b class='amount'>bid $</b>${Number(element.bid).toFixed(2)}</p>
	
	<p class='amount-text'><b class='amount'>ask $</b>${Number(element.ask).toFixed(2)}</p>

	<span class='amount-text'><b class='amount'>Data: </b>${element.create_date}</span>

	`
	document.getElementById('value-da-api').innerHTML = output;
}

function addOptions() {
	const simbolos = ['USDBRL','EURBRL','BTCBRL','USDJPY','BTCUSD','USDARS','BRLARS'];

	simbolos.map((simbolo,index) => {createOptions(simbolo,index)})
}
addOptions()

function createOptions(textOption,valueOption) {
	const options = document.createElement('option');
	options.text  = textOption;
	options.value = valueOption;
	idSelect.add(options, null);
}