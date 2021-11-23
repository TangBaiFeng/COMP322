function makePUTrequest() {
	$.ajax({
		method: "PUT",
		url: "http://localhost:3000/grade",
		success: function (data, status) {
			alert("Data: " + data + "\nStatus: " + status);
		},
	});
}

function makeDELETErequest() {
	$.ajax({
		method: "DELETE",
		url: "http://localhost:3000/grade",
		success: function (data, status) {
			alert("Data: " + data + "\nStatus: " + status);
		},
	});
}

function makeGETrequest() {
	$.ajax({
		method: "GET",
		url: "http://localhost:3000/grade",
		success: function (data, status) {
			alert("Data: " + data + "\nStatus: " + status);
		},
	});
}

function makePOSTrequest() {
	$.ajax({
		method: "POST",
		url: "http://localhost:3000/grade",
		success: function (data, status) {
			alert("Data: " + data + "\nStatus: " + status);
		},
	});
}
