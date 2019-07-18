function TestObject(param1, param2, param3) {
	this.param1 = param1;
	this.param2 = param2;
	this.param3 = param3;
}


// Update Variables based off delta
TestObject.prototype.update = function(delta) {	
}


// Draw Object onto Context Canvas
// interpolationPercentage used to reduce stuttering for indescrete positions
TestObject.prototype.draw = function(interpolationPercentage) {
}