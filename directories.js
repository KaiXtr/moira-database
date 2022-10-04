var lst = [];
var http = require('http');
var url = require('url');

function getFolders(path) {
	const fs = require('fs');

	fs.readdir(path, (err, f) => {
		lst = f;
		console.log(lst);
	});
}

getFolders('phanerozoic/paleozoic/');