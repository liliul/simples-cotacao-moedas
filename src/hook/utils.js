const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');

export function resultadoDaConversao() {
	const varInput1 = input1.valueAsNumber;
	const varInput2 = input2.valueAsNumber;
	document.querySelector('#res-converter').innerText = converte(varInput1, varInput2).toFixed(2);
}

export function converte(input1, input2) {
	return input1 * input2
}
