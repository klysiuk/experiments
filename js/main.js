
MYAPP = {};

MYAPP.namespace = function(namespace) {

	var parent = MYAPP;
	var parts = namespace.split('.');

	if (parts[0]=="MYAPP") {
		parts = parts.slice(1);
	}

	for (var i=0;i<parts.length;i++) {
		if (typeof parent[parts[i]] === 'undefined') {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}

	return parent;

}


var a = MYAPP.namespace("MYAPP.bla");
var b = MYAPP.namespace("MYAPP.bla.a");
