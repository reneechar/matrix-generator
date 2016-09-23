const matrix = require('../matrix');
const Chai = require('chai');
const expect = Chai.expect;

let myMatrix = matrix();

describe('matrix', () => {
	it('should be a function', () => {
		expect(matrix).to.be.a('function');
	});

	it('should return an object', () => {
		expect(myMatrix).to.be.an('object');
	});
	describe('generateMatrix()', () => {
		beforeEach(() => {
			myMatrix = matrix();
		})
		it('should exist', () => {
			expect(myMatrix.generateMatrix).to.exist;	
		})
		
		it('should be a function', () => {
			expect(myMatrix.generateMatrix).to.be.a('function');
		})

		it('should return a multi-demensional array', () => {
			expect(myMatrix.generateMatrix(3,3)).to.be.instanceof(Array);
			expect(myMatrix.generateMatrix(3,3)[0]).to.be.instanceof(Array);
		})

		it('should be sorted', () => {
			let thisMatrix = myMatrix.generateMatrix(2,2);
			expect(thisMatrix[0][1]).to.be.at.least(thisMatrix[0][0]);
			expect(thisMatrix[1][0]).to.be.at.least(thisMatrix[0][1]);
			expect(thisMatrix[1][1]).to.be.at.least(thisMatrix[1][0]);

			let bigMatrix = myMatrix.generateMatrix(10,10);
			expect(bigMatrix[3][0]).to.be.at.least(bigMatrix[2][9]);
			expect(bigMatrix[4][5]).to.be.at.least(bigMatrix[4][4]);
		})
	})
})