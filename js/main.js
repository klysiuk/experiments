
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

var Universe = function() {

	if (!(this instanceof Universe)) {
		return new Universe();
	}


	var instance = this;

	Universe = function() {
		return instance;
	}

	Universe.prototype = this;

	var instance = new Universe();

	instance.name = 'Jack';

	return instance;

}


var CarMaker = function() {
}

CarMaker.prototype.drive = function() {
	console.log('this is car of type '+this.type);
}

CarMaker.Sedan = function() {
	this.type = 'sedan';
}

CarMaker.Sedan.prototype = new CarMaker();
CarMaker.Sedan.prototype.constructor = CarMaker.Sedan;

CarMaker.factory = function(constr) {
	if (typeof CarMaker[constr]!==undefined) {
		return new CarMaker[constr]();
	}
}

var toyota = CarMaker.factory('Sedan');