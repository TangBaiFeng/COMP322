boolCheck = true;
document.write("<table>");
document.write("");
document.write("</table>");
while (boolCheck) {
	let x = prompt("Value of x", 0);
	let operator = prompt("operator", 0);
	let y = prompt("Value of y", 0);
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

	boolCheck = confirm(result);
}
