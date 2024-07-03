import { resultadoDaConversao } from './utils.js';

// inputs para converte
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');

const buttonCoverter = document.getElementById('button-coverter');

const selected2 = document.getElementById("selected-converter-2");

selected2.addEventListener('change', getApiConverter)

getApiConverter()
// api da awesomeapi
	async function getApiConverter() {
		const req = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,BRL-USD,EUR-BRL,BTC-BRL,USD-JPY,BTC-USD,ARS-BRL,BRL-ARS,USD-ARS,BRL-JPY,JPY-USD,JPY-BRL');
		const res = await req.json();

		selecionarMoeda(res)
	}

// pegando value do option e comparando com o simbolo da moeda
	function selecionarMoeda(res) {	
		const isOption = selected2.options[selected2.selectedIndex];
		const isOptionText = Number(isOption.value); 

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
		}else if(isOptionText === 10) {
			htmlC(res.JPYUSD)
		}else if(isOptionText === 11) {
			htmlC(res.JPYBRL)
		}
	}

// adiconando resultado ask da api no input-2
	function htmlC(ask) {
		document.getElementById('input-2').setAttribute('value', Number(ask.ask).toFixed(2));
	}

// pegando os inputs e adicionando no id res-converter
	buttonCoverter.addEventListener('click', () => {
		resultadoDaConversao();
	})

// usando a tecla enter para ver o resultado do coversão das moedas
	input1.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			resultadoDaConversao();
		}
	})

// adicionando simbolos nos options
	function addOptionsConverter() {
		const simbolos = ['Dolar Real','Real Dolar','Bitcoin Real','Dolar Iene','Bitcoin Dolar','Euro Real','Dolar Peso-Arg','Real Peso-Arg','Peso-Arg Real','Real Iene','Iene Dolar','Iene Real'];

		simbolos.map((simbolo,index) => {createOptionsConverte(simbolo,index)});
	}
addOptionsConverter()

// criando a tag option e pasando para o selected2
	function createOptionsConverte(textOption,valueOption) {
		const option2 = document.createElement('option');
		option2.text  = textOption;
		option2.value = valueOption;
		selected2.add(option2, null);
}
