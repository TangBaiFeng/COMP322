boolCheck = true;
var mathTableUpdate = [0, 0, 0, 0, 0]; //Min, Max, Total, #of entries, Avg
while (boolCheck) {
	let x = prompt("Value of x", 0);
	let operator = prompt("operator", 0);
	let y = prompt("Value of y", 0);
	let result = resultAssign(x, operator, y);

	boolCheck = confirm(result);
	mathTableUpdate = mathTableUpdate(mathTableUpdate, result);
}
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
 * Keeps track of the min, max, total, and average for the results
 * @param {*} mathTableUpdate storage array
 * @param {*} result result of each line
 * @returns updated storage table
 */
function mathTableUpdate(mathTableUpdate, result) {
	if (result > mathTableUpdate[1]) {
		mathTableUpdate[1] = result;
	}
	if (result < mathTableUpdate[0]) {
		mathTableUpdate[0] = result;
	}
	mathTableUpdate[2] += result;
	mathTableUpdate[3]++;
	mathTableUpdate[4] = mathTableUpdate[2] / mathTableUpdate[3];
	return mathTableUpdate;
}
