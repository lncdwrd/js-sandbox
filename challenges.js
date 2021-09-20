// Looping Half Triangle 1.1
let hashOutput = '';

for (let i = 0; i < 7; i++) {
  hashOutput += '#';
  console.log(hashOutput);
}



// Fizz Buzz 1.1
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} Fizzbuzz`)
  } else if (i % 3 == 0 || i % 5 == 0) {
    console.log(i % 3 == 0 ? `${i} Fizz` : `${i} Buzz`);
  } else {
    console.log(i);
  }
}

// Fizz Buzz 1.2
for (let i = 1; i <= 100; i++) {
  console.log((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
}



// Chessboard 1.1
let size = 8;
let oddGrid = '';
let evenGrid = ''

for (let i = 1; i <= 8; i++) {
  if (i % 2 == 0) {
    while (evenGrid.length < 8) {
      evenGrid += '#' + ' ';
    }
    console.log(evenGrid);
  } else {
    while (oddGrid.length < 8) {
      oddGrid += ' ' + '#';
    }
    console.log(oddGrid);
  }
}

// Chessboard 1.2
let board = '';

for (let i = 0; i < size; i++) {

  // Happens per row
  for (let j = 0; j < size; j++) {

    // Determines space or hash
    if ((i + j) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }

  board += '\n';
}

console.log(board);



// Get Min Number
function getMin(a, b) {
  return Math.min(a, b);
}

console.log(getMin(0, -10));


// Odd or Even
function isEven(num) {
  if (num == 0) return true;
  else if (num == 1) return false;
  else if (num < 0) return isEven(-num);
  else return isEven(num - 2);
}

console.log(isEven(-1));



// Count Similar Characters
function countChar(string, char) {
  let charCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      charCount++;
    }
  }

  return charCount;
}

console.log(countChar("kakkerlak", "k"));

function countB(str) {
  return countChar(str, 'B');
}

console.log(countB('BBC'));



/**
 * Full Triangle
 * https://stackoverflow.com/questions/3121670/for-loop-repeats-first-loop-twice
 * https://stackoverflow.com/questions/8721699/print-hello-twice-via-javascript
 */

 let egypt = '';
 let height =  '5';
 let maxWidth = '9';
 let hashCount = 1;
 
 
 // for (let i = 0; i <= totalHash; i++) {
 //   if (i == 0) {
 //     continue;
 //   } else if (i % 2 !== 0) {
 //     for (let j = 0; j < i; j++) {
 //       egypt += `#`;
 //     }
 //   } else {
 //     egypt += '\n';
 //   }
 // }
 
 for (let i = 0; i < height; i++) {
   
   for (let j = 0; j <= maxWidth; j++) {
     egypt += j;
   }
   egypt += '\n';
 }
 
 
 console.log(egypt);
 
 
 // block increases by 2 per row
 // space decreases by 1 from 4
 //     #
 //    ###
 //   #####
 //  #######
 // #########
 
 // k 
 
 // for (let j = 0; j <= i; j++) {
 //   if (j == 0) {
 //     egypt += '# ';
 //   } else {
 //     for (let k = 0; k <= j; k++) {
 //       // if (j > 0) {
 //       //   j = j - 1;
 //       // }
 //       egypt += '# ';
 //     }
 //   }
 // }