// 'cleanChars' removes each character from current string
String.prototype.cleanChars = function(forRemoves){
   let result = '';
   for (const char of this) {
      result += (!forRemoves.includes(char)) ? char : '';
   }
   return result;
}

const result = 'Hello dear friend!'.cleanChars('a o!e');
console.log(result);
