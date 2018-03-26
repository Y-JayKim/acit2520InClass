const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

const port = process.env.PORT || 8080;

///

app.listen(port, () => {
	console.log(`Server is up on the port ${port}`);
});