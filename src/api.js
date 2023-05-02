async function getApiCotacao() {
	const req = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
	const res = await req.json();

	console.log(res)

	const msg = `$${res.USDBRL.ask}`;
	document.getElementById('value').append(msg); 
}
getApiCotacao()