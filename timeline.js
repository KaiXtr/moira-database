//KEEP PAGE SCROLL
document.addEventListener("DOMContentLoaded", function(event) { 
	var scrl = localStorage.getItem('scrl');
	if (scrl) window.scrollTo(0, scrl);
});

window.onbeforeunload = function(e) {
	localStorage.setItem('scrl', window.scrollY);
};

//LOAD BANNER IMAGE BY URL QUERY
const qry = new URLSearchParams(window.location.search)
if (qry.get('path') != null) {dir = "." + qry.get('path');} else {dir = '';}
if (dir == '') {img = 'banner';}
else {
	img = dir.substr(dir.lastIndexOf('.') + 1,dir.lenght);
	document.write(dir.substr(0,dir.lastIndexOf('.')) + ".<b>" + img + "</b>");
}

banner = document.getElementById('banner');
banner.style = "background-image: url('media/images/banners/" + img + ".jpg');";

/*var getFolders = function(dir) {

	var filesystem = require("fs");
	var results = [];

	filesystem.readdirSync(dir).forEach(function(file) {

		file = dir+'/'+file;
		var stat = filesystem.statSync(file);

		if (stat && stat.isDirectory()) {
			results = results.concat(_getAllFilesFromFolder(file))
		} else results.push(file);

	});

	return results;
};*/
function getFolders(dir) {
	return window.location.href;
}

//LINK NAVIGATION BAR OPTIONS
slct = document.getElementsByClassName("bar-select");
for (i=0;i<slct.length;i++) {
	for (o=0;i<slct[i].length;o++) {
		slct[i][o].addEventListener('click', function(event) {
				url = new URL(window.location.href);
				url.URLSearchParams.append("path",slct[i][o].value);
			},false);
	}
}

//DRAW TIMELINE RECTS
document.write("<br/><canvas id='cnv' width='600' height='200'></canvas>")
el = document.getElementById('cnv');
cnv = el.getContext('2d');

function clickButton(event,rect) {
	if (cnv.isPointInPath(rect,event.clientX,event.clientY)) {alert('click!');}
}
function hoverButton(event,rect) {
	if (cnv.isPointInPath(rct,event.clientX,event.clientY)) {
		cnv.fillStyle = '#FFFFFF';
	}
	else {cnv.fillStyle = '#000000';}
	cnv.clearRect(0, 0, cnv.width, cnv.height);
	cnv.fill(rect);
}

cnv.fillStyle = '#000000';
for (x=0;x<40;x++) {
	rct = new Path2D()
	rct.rect(0 + (x *41),20,40,40);
	cnv.fill(rct)
	el.addEventListener('click', clickButton(rct),false);
	el.addEventListener('mousemove', hoverButton(rct),false);
}

//cnv.moveTo(0,0);
//cnv.lineTo(300,200);
cnv.stroke();

//GET TIME INFO
if (dir != "") {document.write("<br/><iframe class=\"factcontent\" src=\"." + dir.replace('.','/') + "/index.htm\"></iframe>");}