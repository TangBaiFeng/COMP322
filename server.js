const http = require("http");
const fs = require("fs");
server = http.createServer();
server.listen(3000);
server.on("request", function (req, res) {
	console.log(req.url);
	if (req.url === "/" || req.url === "/index.html") {
		fs.readFile("index.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	} else if (req.url == "/introduction.html") {
		fs.readFile("introduction.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	} else {
		res.end("Page Not Found");
	}
});
