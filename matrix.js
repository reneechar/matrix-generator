module.exports = function(argument) {

	function createArrOfNums(totalNumsInArr) {
		let initialArr = [];
		for (var i = 0; i < totalNumsInArr; i++) {
			initialArr.push(Math.floor(Math.random()*100+1));
		}
		return initialArr;
	}	

	function sortArray(arrOfNums) {
		arrOfNums.sort((a,b) => {
			return a - b;
		});
		return arrOfNums;
	}

	return {
		generateMatrix: function (rows,columns) {
			//rows should be equal to the amount of nested arrays in matrix
			//colums should be the length of each row array
			let theMatrix = [];
			for (var i = 0; i < rows; i++) {
				theMatrix.push([]);
			}
			//create an array of random numbers
			//pass that array into the sortArray function
			//below row.push(i) for i=0, i<returned array.length

			let sortedNumsArr = sortArray(createArrOfNums(columns*rows));

			theMatrix = theMatrix.map(row => {
				for (var i = 0; i < columns; i++) {
					row.push(sortedNumsArr.shift());
				}
				return row;

			})
			return theMatrix;
		}
	}
}