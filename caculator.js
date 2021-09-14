boolCheck = true;
var mathTable = [Number.MAX_VALUE, Number.MIN_VALUE, 0, 0, 0]; //Min, Max, Total, #of entries, Avg
var rawTable = [];
while (boolCheck) {
	var x = prompt("Value of x", 0);
	let operator = prompt("operator", 0);
	let y = prompt("Value of y", 0);
	let result = resultAssign(x, operator, y);
	rawTable.push([x, operator, y, result]);

	boolCheck = confirm(result);
}
console.log(rawTable);
mathTableUpdate();
console.log(mathTable);
/**
 * Assigns a value to result based on the operator
 * @param {*} x  first int
 * @param {*} operator operator (+,-,/,*,%)
 * @param {*} y  second int
 * @returns result of doing x operator y
 */
function resultAssign(x, operator, y) {
	var result;
	if (!isNaN(x) && !isNaN(y)) {
		x = parseInt(x, 10);
		y = parseInt(y, 10);
		switch (operator) {
			case "+":
				result = x + y;
				break;
			case "-":
				result = x - y;
				break;
			case "%": // Does not work
				result = x % y;
				break;
			case "/":
				result = x / y;
				break;
			case "*":
				result = x * y;
				break;
			default:
				result = "computation error";
				break;
		}
	} else {
		result = "wrong input numbers";
	}
	return result;
}
/**
 * Calculates the min, max, average, and total for all the results
 */
function mathTableUpdate() {
	for (let index = 0; index < rawTable.length; index++) {
		var result = rawTable[index][3];
		if (isFinite(result)) {
			if (result > mathTable[1]) {
				mathTable[1] = result;
			}
			if (result < mathTable[0]) {
				mathTable[0] = result;
			}
			mathTable[2] += result;
			mathTable[3]++;
			mathTable[4] = mathTable[2] / mathTable[3];
		}
	}
}
