class Concat {
   constructor(baseStr = '') {
      this.str = baseStr;
   }
   cnt = (str = '', space = false) => {
      this.str += space ? ` ${str}` : str;
      return this;
   }
   get = () => this.str;
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const concatStr = new Concat('Hello');

concatStr
   .cnt('my', true)
   .cnt()
   .cnt('dear', true)
   .cnt('fiend', true)
   .cnt('!');

console.log(concatStr.get());
