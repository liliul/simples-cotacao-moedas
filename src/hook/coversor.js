// conversor
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');

const buttonCoverter = document.getElementById('button-coverter');


// input1.addEventListener('change', () => {document.getElementById('input-2').setAttribute('value', input1.value)})


// console.log(varInput1)
const selected2 = document.getElementById('selected-converter-2');
selected2.addEventListener('change', getApiConverter)
getApiConverter()

async function getApiConverter() {
	const req = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,BRL-USD,EUR-BRL,BTC-BRL,USD-JPY,BTC-USD,ARS-BRL,BRL-ARS,USD-ARS,BRL-JPY');
	const res = await req.json();

	console.log(res)
	selectMoedaC(res)
}

function selectMoedaC(res) {
	
	const input3 = document.getElementById('selected-converter-2');
	const isOption = input3.options[input3.selectedIndex];
	const isOptionText = Number(isOption.value); 
	console.log(isOptionText)

	if (isOptionText === 0) {
		htmlC(res.USDBRL)
	}else if(isOptionText === 1) {
		htmlC(res.BRLUSD)
	}else if(isOptionText === 2) {
		htmlC(res.BTCBRL)
	}else if(isOptionText === 3) {
		htmlC(res.USDJPY)
	}else if(isOptionText === 4) {
		htmlC(res.BTCUSD)
	}else if(isOptionText === 5) {
		htmlC(res.EURBRL)
	}else if(isOptionText === 6) {
		htmlC(res.USDARS)
	}else if(isOptionText === 7) {
		htmlC(res.BRLARS)
	}else if(isOptionText === 8) {
		htmlC(res.ARSBRL)
	}else if(isOptionText === 9) {
		htmlC(res.BRLJPY)
	}

}
function htmlC(bid) {
	document.getElementById('input-2').setAttribute('value', Number(bid.ask).toFixed(2))
}
// htmlC()
buttonCoverter.addEventListener('click', () => {
	const varInput1 = input1.valueAsNumber;
	const varInput2 = input2.valueAsNumber;
	
	console.log(converter(varInput1, varInput2))
	document.querySelector('#res-converter').innerText = converter(varInput1, varInput2).toFixed(2);
	
})
function converter(input1, input2) {
	return input1 * input2
}


function addOptionsConverter() {
	const simbolos = ['Dolar Real','Real Dolar','Bitcoin Real','Dolar Iene','Bitcoin Dolar','Euro Real','Dolar Peso-Arg','Real Peso-Arg','Peso-Arg Real','Real Iene'];

	simbolos.map((simbolo,index) => {createOptionsCoverter(simbolo,index)})
}
addOptionsConverter()

function createOptionsCoverter(textOption,valueOption) {
	// const input1 = document.getElementById('selected-converter-1');
	const input2 = document.getElementById('selected-converter-2');

	// const options = document.createElement('option');
	// options.text  = textOption;
	// options.value = valueOption;
	// input1.add(options, null);

	const option2 = document.createElement('option');
	option2.text  = textOption;
	option2.value = valueOption;
	input2.add(option2, null);
}
