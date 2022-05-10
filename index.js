function convertTemp() {
	const userTempC = Number(document.getElementById('input-temp').value);	
	const CONSTANT1 = 9/5
	const CONSTANT2 = 32

	console.log(userTempC);

	const tempF = CONSTANT1 * userTempC + CONSTANT2
	document.getElementById('result').innerHTML = `${userTempC.toFixed(2)}ºC = ${tempF.toFixed(2)} ºF`;
}
