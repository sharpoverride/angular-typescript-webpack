var files = [
	"jquery.min",
	"angular.min"
];

files = files.map(function(item) {
	return "./vendor/" + item + ".js";
});

module.exports = files;