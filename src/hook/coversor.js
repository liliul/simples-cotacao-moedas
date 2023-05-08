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
