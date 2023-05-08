/**
 * use: USD-BRL -> USDBRL -> dolar/real 
 * use: EUR-BRL -> EURBRL -> euro/real
 */

const idSelect = document.getElementById('id-select');

idSelect.addEventListener('change', getApiCotacao)
getApiCotacao()

async function getApiCotacao() {
	const req = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,USD-JPY,BTC-USD,ARS-BRL,BRL-ARS');
	const res = await req.json();

	console.log(res)
	
	const element = res.USDBRL;	
	html(element)

	selectMoeda(res)
}

function selectMoeda(res) {
	
	const idSelect = document.getElementById('id-select');

	const isOption = idSelect.options[idSelect.selectedIndex];
	const isOptionText = Number(isOption.value); 
	// console.log(isOptionText)

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
		html(res.ARSBRL)
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
	const simbolos = ['USDBRL','EURBRL','BTCBRL','USDJPY','BTCUSD','ARSBRL','BRLARS'];

	simbolos.map((simbolo,index) => {createOptions(simbolo,index)})
}
addOptions()

function createOptions(textOption,valueOption) {
	const idSelect = document.getElementById('id-select');

	const options = document.createElement('option');
	options.text  = textOption;
	options.value = valueOption;
	idSelect.add(options, null);
}

// conversor
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');

const buttonCoverter = document.getElementById('button-coverter');


// console.log(varInput1)

// async function getApiConverter() {
// 	const req = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,USD-JPY,BTC-USD,ARS-BRL,BRL-ARS');
// 	const res = await req.json();

// 	console.log(res)
	
// 	converter()
// }

buttonCoverter.addEventListener('click', () => {
	const varInput1 = input1.valueAsNumber;
	const varInput2 = input2.valueAsNumber;
	
	console.log(converter(varInput1, varInput2))
	document.querySelector('#res-converter').innerHTML = converter(varInput1, varInput2)
})
function converter(input1, input2) {
	return input1 * input2
}


// function addOptionsConverter() {
// 	const simbolos = ['Real','Dolar','Bitcoin','iene','Euro','Peso-Arg'];

// 	simbolos.map((simbolo,index) => {createOptionsCoverter(simbolo,index)})
// }
// addOptionsConverter()

// function createOptionsCoverter(textOption,valueOption) {
// 	const input1 = document.getElementById('selected-converter-1');
// 	const input2 = document.getElementById('selected-converter-2');

// 	const options = document.createElement('option');
// 	options.text  = textOption;
// 	options.value = valueOption;
// 	input1.add(options, null);

// 	const option2 = document.createElement('option');
// 	option2.text  = textOption;
// 	option2.value = valueOption;
// 	input2.add(option2, null);
// }
