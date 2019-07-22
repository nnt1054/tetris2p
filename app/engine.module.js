class engine {

	constructor(a=1, b=2) {
		this.a = a;
		this.b = b;
	}

	testMethod() {
		console.log('test method')
	}

}

try {
	module.exports = testExport;
} catch (err) {
	console.log('engine export failed');
}