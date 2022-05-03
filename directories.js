var lst = [];
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  //var txt = q.year + " " + q.month;
  //res.end(txt);
  res.end('yee')
}).listen(8080);

function getFolders(path) {
	const fs = require('fs');

	fs.readdir(path, (err, f) => {
		lst = f;
		console.log(lst);
	});
}

getFolders('phanerozoic/paleozoic/');