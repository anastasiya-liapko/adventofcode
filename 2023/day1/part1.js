const reverseString = (str) => {
  return str.split('').reverse().join('');
}

const findFirstAndLastDigit = (str) => {
  let firstDigit = null;
  let lastDigit = null;

  for (let char of str) {
    if (char >= '0' && char <= '9') {
      firstDigit = char;
      break;
    }
  }

  for (let char of reverseString(str)) {
    if (char >= '0' && char <= '9') {
      lastDigit = char;
      break;
    }
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