export default class Number {
  getIntegerRes(int) {
    // console.log(int, ' === ', isNaN(int));
    // if (isNaN(int) || !this.isInteger(int)){
    if (isNaN(int) || !this.isInteger(int)){
      return 'The value is not an integer';
    }

    let result = '';

    if (int % 3 === 0 ) {
      result += 'P'
    }
    if (int % 5 === 0 ) {
      result += 'E'
    }
    if (result === '') {
      result = int;
    }

    return result;
  }

  isInteger = (x) => (parseInt(x, 10) === x);
}
