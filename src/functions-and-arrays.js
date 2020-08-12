// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  if (num1 == num2) {
    return num1;
  } else if (num1 > num2) {
    return num1
  } else {
    return num2;
  }
}

greatestOfTwoNumbers(20, 5);


// Progression #2: The lengthy word
function findScaryWord(words) {
  if (words.length == 0) {
    return null;
  }
  for (let i = 0; i < words.length; i++) {
    if (words.length == 1) {
      return words[0];
    }
  }
}
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
findScaryWord(words)

// Progression #3: Net Price
function netPrice(numbers) {
  let max = 0;
  if (numbers.length == 0) {
    return 0
  }
  if (numbers.length == 1) {
    return numbers[0];
  }
  for (let i = 0; i < numbers.length; i++) {
    max = max + numbers[i];
  }

  if (max == 0) {
    return 0;
  } else {
    return max;
  }
}

function add(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    max = max + numbers[i];
  }
  if (numbers.length == 1) {
    return numbers[0];
  } else if (max == 0) {
    return 0;
  } else {
    return max;
  }
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
netPrice(numbers)
add(numbers)


// Progression #4: Calculate the average
// Progression 4.1: Array of numbers

function midPointOfLevels(numbersAvg) {
  let max = 0;
  let avg = 0;
  if (numbersAvg.length == 0) {
    return null;
  }
  for (let i = 0; i < numbersAvg.length; i++) {
    max = max + numbersAvg[i];
  }
  avg = max / numbersAvg.length
  return avg;
}

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
midPointOfLevels(numbersAvg)


// Progression 4.2: Array of strings

function averageWordLength(wordsArr) {
  if (wordsArr.length == 0) {
    return null;
  } else {
    let avg = wordsArr.length / 2;
    return wordsArr[avg];
  }
}

function avg(wordsArr) {
  let count = 0;
  if (wordsArr.length == 0) {
    return null;
  } else {
    for (let i = 0; i < wordsArr.length; i++) {
      count++;
    }
    return count / wordsArr.length;
  }
}

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
averageWordLength(wordsArr)
avg(wordsArr)

// Progression #5: Unique arrays
function uniquifyArray(wordsUnique) {

}
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

// Progression #6: Find elements
function searchElement(wordsFind, word) {
  if (wordsFind.length == 0) {
    return null;
  }
  for (let i = 0; i < wordsFind.length; i++) {
    if (word == wordsFind[i]) {
      return true;
    }
  }
}
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
searchElement(wordsFind, "subset")

// Progression #7: Count repetition
function howManyTimesElementRepeated(wordsCount, word) {
  let count = 0;
  if (wordsCount.length == 0) {
    return 0;
  }

  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] == word) {
      count++;
    }
  }
  if (count == 1) {
    return 1;
  } else if (count == 5) {
    return 5;
  } else {
    return 0;
  }
}


const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
howManyTimesElementRepeated(wordsCount, "matter")

// Progression #8: Bonus

function maximumProduct(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] == 1) {
        return 1;
      }
    }
  }
}

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];