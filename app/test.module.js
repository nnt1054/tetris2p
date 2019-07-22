class testExport{

	constructor() {
		console.log('hey');
	}

	testMethod() {
		console.log('hahahah');
	}

}

try {
	module.exports = testExport;
} catch (err) {
	console.log('testExport not exported');
	console.log(err);
}