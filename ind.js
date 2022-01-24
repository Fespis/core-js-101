/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */

// function evaluateTicTacToePosition(position) {
//   let string = '';
//   for (let i = 0; i < 2; i += 1) {
//     if (position[0][i] === 'X') {
//       string += `${position[0].indexOf('X')}`;
//     }
//     if (position[1][i] === 'X') {
//       string += `${position[1].indexOf('X')}`;
//     }
//     if (position[2][i] === 'X') {
//       string += `${position[2].indexOf('X')}`;
//     }
//   }
//   if (
//     string === '000' ||
//     string === '012' ||
//     string === '111' ||
//     string === '222' ||
//     string === '210'
//   ) {
//     return 'X';
//   }
//   for (let i = 0; i < 3; i += 1) {
//     if (position[0][i] === '0') {
//       string += `${position[0].indexOf('0')}`;
//     }
//     if (position[1][i] === '0') {
//       string += `${position[1].indexOf('0')}`;
//     }
//     if (position[2][i] === '0') {
//       string += `${position[2].indexOf('0')}`;
//     }
//   }
//   if (
//     string === '000' ||
//     string === '012' ||
//     string === '111' ||
//     string === '222' ||
//     string === '210'
//   ) {
//     return '0';
//   }
//   return undefined;
// }
// console.log(
//   evaluateTicTacToePosition([
//     [
//       ['X', 'X', 'X'],
//       ['X', 'X', 'X'],
//       ['X', 'X', 'X'],
//     ],
//   ])
// );

// function generateOdds(len) {
//   let number = -1;
//   const arr = new Array(len).fill(0).map((item) => {
//     number += 2;
//     return item + number;
//   });
//   return arr;
//   console.log(arr);
// }

/**
     [
        [  0, 1, 2, 3, 4 ],
        [ 10,11,12,13,14 ],
        [ 20,21,22,23,24 ],
        [ 30,31,32,33,34 ]
     ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
// function toCsvText(arr) {
//   let string = '';
//   arr.map((item, index) => {
//     if (index === arr.length) {
//       string += `${item.join(',')}`;
//     } else {
//       string += `${item.join(',')}\n`;
//     }
//     return item;
//   });
//   return string.trim();
// }

/**
 * Return Promise object that is resolved with string value === 'Hooray!!! She said "Yes"!',
 * if boolean value === true is passed, resolved with string value === 'Oh no, she said "No".',
 * if boolean value === false is passed, and rejected
 * with error message === 'Wrong parameter is passed! Ask her again.',
 * if is not boolean value passed
 *
 *    const p1 = willYouMarryMe(true);
 *    p1.then(answer => console.log(answer)) // 'Hooray!!! She said "Yes"!'
 *
 *    const p2 = willYouMarryMe(false);
 *    p2.then(answer => console.log(answer)) // 'Oh no, she said "No".';
 *
 *    const p3 = willYouMarryMe();
 *    p3.then(answer => console.log(answer))
 *      .catch((error) => console.log(error.message)) // 'Error: Wrong parameter is passed!
 *                                                    //  Ask her again.';
 */
// function willYouMarryMe(isPositiveAnswer) {
//   return new Promise((resolve, reject) => {
//     if (isPositiveAnswer === true) {
//       return resolve('Hooray!!! She said "Yes"!');
//     }
//     if (isPositiveAnswer === false) {
//       return resolve('Oh no, she said "No".');
//     }
//     return reject(new Error('Wrong parameter is passed! Ask her again.'));
//   });
// }
// console.log(willYouMarryMe(true));

// fetch('https://no-such-server.blabla')
//   .then((response) => response.json())
//   .catch((err) => console.log(err));
