/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
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
function evaluateTicTacToePosition(position) {
  let string = '';
  for (let i = 0; i < 2; i += 1) {
    if (position[0][i] === 'X') {
      string += `${position[0].indexOf('X')}`;
    }
    if (position[1][i] === 'X') {
      string += `${position[1].indexOf('X')}`;
    }
    if (position[2][i] === 'X') {
      string += `${position[2].indexOf('X')}`;
    }
  }
  if (
    string === '000' || string === '012' || string === '111' || string === '222' || string === '210'
  ) {
    return 'X';
  }
  for (let i = 0; i < 3; i += 1) {
    if (position[0][i] === '0') {
      string += `${position[0].indexOf('0')}`;
    }
    if (position[1][i] === '0') {
      string += `${position[1].indexOf('0')}`;
    }
    if (position[2][i] === '0') {
      string += `${position[2].indexOf('0')}`;
    }
  }
  if (
    string === '000' || string === '012' || string === '111' || string === '222' || string === '210'
  ) {
    return '0';
  }
  return undefined;
}
console.log(
  evaluateTicTacToePosition([
    [
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
    ],
  ])
);
