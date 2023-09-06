/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    let isSqr = false;

    // Hint about performance: we are dealing with a square matrix. Is the Matrix's length the same as the length of the internal arrays? (*￣3￣)╭
    // test to see if there are as many idx as there are arr
    for (k = 0; k < sqrMatrix.length; k++) {
        if (sqrMatrix[k].length == sqrMatrix.length) {
            isSqr = true;
        }
    }
    let lD = 0;
    let rD = 0;
    // iterate through each appropriate (loop with arr and idx) and collect TL diagonal
    // iterate through each appropriate (loop with arr and idx) and collect TR diagonal
    for (i = 0; i < sqrMatrix.length; i++) {
        lD += sqrMatrix[i][i];
        rD += sqrMatrix[i][sqrMatrix[i].length - i - 1];
    }

    return Math.abs(lD - rD);

    // Find and return difference
}

/*****************************************************************************/

console.log(diagonalDifference(squareMatrix1) + " expected " + expected1);
console.log(diagonalDifference(squareMatrix2) + " expected " + expected2);
