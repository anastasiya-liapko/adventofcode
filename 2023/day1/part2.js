const numberWords = new Map([
  ['one', '1'], 
  ['two', '2'], 
  ['three', '3'], 
  ['four', '4'],
  ['five', '5'],
  ['six', '6'],
  ['seven', '7'],
  ['eight', '8'],
  ['nine', '9'],
])

const isDigit = (char) => {
  return char >= '0' && char <= '9';
}

const findDigitInSubstring = (substring, reverse = false) => {
  for (let [word, digit] of numberWords) {
    if (
      (substring.startsWith(word) && !reverse) || 
      (substring.endsWith(word) && reverse)
    ) {
      return digit;
    }
  }
  
  return null;
}

const findFirstAndLastDigit = (s) => {
  let firstDigit = null;
  let lastDigit = null;

  let i = 0;
  while (i < s.length) {
    if (isDigit(s[i])) {
      firstDigit = s[i];
      break;
    } 
    
    const digit = findDigitInSubstring(s.substring(i));

    if (digit) {
      firstDigit = digit;
      break;
    }

    i += 1;
  }

  i = s.length;
  while (i > 0) {
    if (isDigit(s[i - 1])) {
      lastDigit = s[i - 1];
      break;
    } 

    const digit = findDigitInSubstring(s.substring(0, i), true);
      
    if (digit) {
      lastDigit = digit;
      break;
    }
    
    i -= 1;
  }
  
  return firstDigit && lastDigit ? +(firstDigit + lastDigit) : 0;
}

const getSum = (data) => {
  let sum = 0;

  for (let str of data.split('\n')) {
    sum += findFirstAndLastDigit(str);
  }

  return sum;
}