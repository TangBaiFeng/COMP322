const express = require("express");
const cors = require("cors"); // Added this since my browser disables cors
const app = express();
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
app.get("/grade", function (req, res) {
	res.send("Get a GET request at /grade, Troy ");
});
app.post("/grade", function (req, res) {
	res.send("Got a POST request at /grade, Troy");
});
app.put("/grade", function (req, res) {
	res.send("Got a PUT request at /grade, Troy");
});
app.delete("/grade", function (req, res) {
	res.send("Got a DELETE request at /grade, Troy");
});
