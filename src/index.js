module.exports = function toReadable (number) {
  const strNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const strFirstTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const strTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  //debugger
  if (number < 10) {
    return strNumbers[number];
  }
  if (9 < number && number < 20) {
    return strFirstTen[number-10];
  }
  let numArr = number.toString().split('');
  if (19 < number && number < 100) {
    if (numArr[1] == 0) {
        return strTens[numArr[0]-2];
    } else {
        return strTens[numArr[0]-2] + ' ' + strNumbers[numArr[1]];
    }
  }
  if (99 < number && number < 1000) {
    if (numArr[1] == 0 && numArr[2] == 0) {
        return strNumbers[numArr[0]] + ' ' + 'hundred';
    } else if (numArr[2] == 0 && numArr[1] !== '1') {
        return strNumbers[numArr[0]] + ' ' + 'hundred' + ' ' + strTens[numArr[1]-2];
    } else if (numArr[1] == 0) {
        return strNumbers[numArr[0]] + ' ' + 'hundred' + ' ' + strNumbers[numArr[2]];
    } else if (numArr[1] == '1') {
        let firstTen = +(numArr[1] + numArr[2]);
        return strNumbers[numArr[0]] + ' ' + 'hundred' + ' ' + strFirstTen[firstTen -10];
    } else {
        return strNumbers[numArr[0]] + ' ' + 'hundred' + ' ' + strTens[numArr[1]-2] + ' ' + strNumbers[numArr[2]];
    }
        
  }
}
