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
buildTable();
mathTableUpdate();
if (mathTable[2] != 0) {
	buildMath();
}
/**
 * Create a table representation of all the data received by the javascript prompts
 */
function buildTable() {
	document.write("<table>");
	document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
	for (let index = 0; index < rawTable.length; index++) {
		document.write(
			"<tr><td>" +
				rawTable[index][0] +
				"</td><td>" +
				rawTable[index][1] +
				"</td><td>" +
				rawTable[index][2] +
				"</td><td>" +
				rawTable[index][3] +
				"</td></tr>"
		);
	}
	document.write("</table>");
}
function buildMath() {
	document.write("<br>");
	document.write("<table>");
	document.write(
		"<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>"
	);
	document.write(
		"<tr><td>" +
			mathTable[0] +
			"</td><td>" +
			mathTable[1] +
			"</td><td>" +
			mathTable[4] +
			"</td><td>" +
			mathTable[2] +
			"</td></tr>"
	);
	document.write("</table>");
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
			case "%":
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
 * Min, Max, Total, #of entries, Avg
 */
function mathTableUpdate() {
	for (let index = 0; index < rawTable.length; index++) {
		var result = rawTable[index][3];
		if (isFinite(result)) {
			if (result > mathTable[1]) {
				mathTable[1] = result; // Max
			}
			if (result < mathTable[0]) {
				mathTable[0] = result; // Min
			}
			mathTable[2] += result; // Total
			mathTable[3]++; // # of entries
			mathTable[4] = mathTable[2] / mathTable[3]; // Average
		}
	}
}
