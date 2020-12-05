class Shape {
   constructor(colorObj) {
      if (!colorObj) {
         throw Error('Please provide parameters for the color');
      }
      this.colorParams = colorObj;
      this.shape = this.constructor.name.toUpperCase();
   }
   toString () {
      return `${this.colorParams.getColorName()} ${this.shape}`;
   };
}

class Circle extends Shape {
   constructor(color = null){
      super(color);
   }
}

class Rectangle extends Shape {
   constructor(color = null){
      super(color);
   }
}

class Triangle extends Shape {
   constructor(color = null){
      super(color);
   }
}


class Color {
   constructor() {
      this.color = this.constructor.name.toLowerCase();
   }
   getColorName() {
      return this.color;
   }
}

class Red extends Color {
   constructor(){
      super();
   }
}

class Green extends Color {
   constructor(){
      super();
   }
}

class Blue extends Color {
   constructor(){
      super();
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const redColor = new Red();
const blueColor = new Blue();
const greenColor = new Green();

const redCircle = new Circle(redColor);
const blueCircle = new Circle(blueColor);
const greenRectangle = new Rectangle(greenColor);

console.log(redCircle.toString());
console.log(blueCircle.toString());
console.log(greenRectangle.toString());
