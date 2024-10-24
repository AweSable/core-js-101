/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let res;
  if (num % 3 === 0 && num % 5 === 0) {
    res = 'FizzBuzz';
  } else if (num % 3 === 0) {
    res = 'Fizz';
  } else if (num % 5 === 0) {
    res = 'Buzz';
  } else {
    res = num;
  }
  return res;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  return n - 1 === 0 ? n : n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  let res = false;
  if (a < b + c && b < a + c && c < a + b) {
    res = true;
  }
  return res;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  let xOverlap = false;
  let yOverlap = false;
  const x11 = rect1.left;
  const x12 = rect1.left + rect1.width;
  const x21 = rect2.left;
  const x22 = rect2.left + rect2.width;
  const y11 = rect1.top;
  const y12 = rect1.top + rect1.height;
  const y21 = rect2.top;
  const y22 = rect2.top + rect2.height;
  if (x11 < x21 && x21 < x12) {
    xOverlap = true;
  } else if (x21 < x11 && x11 < x22) {
    xOverlap = true;
  } else if (x21 < x12 && x12 < x22) {
    xOverlap = true;
  } else if (x11 < x22 && x22 < x12) {
    xOverlap = true;
  }
  if (y11 < y21 && y21 < y12) {
    yOverlap = true;
  } else if (y21 < y12 && y12 < y22) {
    yOverlap = true;
  } else if (y11 < y22 && y22 < y12) {
    yOverlap = true;
  } else if (y21 < y11 && y11 < y22) {
    yOverlap = true;
  }
  return xOverlap && yOverlap;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  const dist = Math.sqrt((point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2);
  return dist < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  let res = null;
  let temp = str;
  while (temp.length > 1) {
    if (temp.lastIndexOf(temp[0]) === 0) {
      [res] = temp;
      break;
    }
    temp = temp.replaceAll(temp[0], '');
  }
  return res;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const openBracket = ['(', '['];
  const closeBracket = [')', ']'];
  return `${openBracket[+isStartIncluded]}${start}, ${end}${closeBracket[+isEndIncluded]}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverse += str[i];
  }
  return reverse;
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const str = num.toString();
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverse += str[i];
  }
  return +reverse;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  const ccnStr = ccn.toString();
  const controlSum = +ccnStr[ccnStr.length - 1];
  let sum = 0;
  let nextEl;
  for (let i = ccnStr.length - 2, j = 1; i >= 0; i -= 1, j += 1) {
    if (j % 2) {
      const doubleEl = +ccnStr[i] * 2;
      if (doubleEl > 9) {
        const doubleElStr = doubleEl.toString();
        nextEl = +doubleElStr[0] + +doubleElStr[1];
      } else {
        nextEl = doubleEl;
      }
    } else {
      nextEl = +ccnStr[i];
    }
    sum += nextEl;
  }
  return (10 - (sum % 10)) % 10 === controlSum;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let str = num.toString();
  while (str.length > 1) {
    let sum = 0;
    for (let i = 0; i < str.length; i += 1) {
      sum += +str[i];
    }
    str = sum.toString();
  }
  return +str[0];
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()'   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const bracketsPairs = ['[]', '()', '{}', '<>'];
  let tempStr = str;
  let res = true;
  function strIncludesSomeOfItem(string) {
    let j = 0;
    let includes = false;
    while (j < bracketsPairs.length) {
      if (string.includes(bracketsPairs[j])) {
        includes = true;
        j = bracketsPairs.length;
      }
      j += 1;
    }
    return includes;
  }
  let condition = strIncludesSomeOfItem(tempStr);
  while (condition) {
    for (let i = 0; i < bracketsPairs.length; i += 1) {
      tempStr = tempStr.replace(bracketsPairs[i], '');
    }
    condition = strIncludesSomeOfItem(tempStr);
  }
  if (tempStr) res = false;
  return res;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  let res = '';
  let tempNum = num;
  while (tempNum >= n) {
    res = tempNum - n * parseInt(tempNum / n, 10) + res;
    tempNum = parseInt(tempNum / n, 10);
  }
  res = tempNum + res;
  return +res;
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  let res = '';
  let ch = '';
  let j = 0;
  let condition = true;
  while (condition) {
    for (let i = 0; i < pathes.length; i += 1) {
      if (i === 0) {
        ch = pathes[0][j];
      } else if (pathes[i][j] !== ch) {
        condition = false;
        break;
      }
    }
    j += 1;
    if (condition) {
      res += ch;
    }
  }
  ch = res[res.length - 1];
  while (res) {
    if (ch !== '/') {
      res = res.slice(0, res.length - 1);
      ch = res[res.length - 1];
    } else {
      break;
    }
  }
  return res;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const l = m1.length;
  const n = m2[0].length;
  const arr = new Array(l);
  for (let i = 0; i < l; i += 1) {
    arr[i] = new Array(n).fill(0);
    for (let j = 0; j < n; j += 1) {
      for (let r = 0; r < m1[0].length; r += 1) {
        arr[i][j] += m1[i][r] * m2[r][j];
      }
    }
  }
  return arr;
}


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
  let rowX;
  let row0;
  let colX;
  let col0;
  let diagonalXFwd = 0;
  let diagonalXBack = 0;
  let diagonal0Fwd = 0;
  let diagonal0Back = 0;
  let res;
  for (let i = 0; i < 3; i += 1) {
    rowX = 0;
    row0 = 0;
    colX = 0;
    col0 = 0;
    if (position[i][i] === 'X') {
      diagonalXFwd += 1;
    } else if (position[i][i] === '0') {
      diagonal0Fwd += 1;
    }
    if (position[i][2 - i] === 'X') {
      diagonalXBack += 1;
    } else if (position[i][2 - i] === '0') {
      diagonal0Back += 1;
    }
    for (let j = 0; j < 3; j += 1) {
      if (position[i][j] === 'X') {
        rowX += 1;
      } else if (position[i][j] === '0') {
        row0 += 1;
      }
      if (position[j][i] === 'X') {
        colX += 1;
      } else if (position[j][i] === '0') {
        col0 += 1;
      }
      if (rowX === 3 || colX === 3 || diagonalXFwd === 3 || diagonalXBack === 3) {
        res = 'X';
        break;
      } else if (row0 === 3 || col0 === 3 || diagonal0Fwd === 3 || diagonal0Back === 3) {
        res = '0';
        break;
      }
    }
    if (res) {
      break;
    }
  }
  return res;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
