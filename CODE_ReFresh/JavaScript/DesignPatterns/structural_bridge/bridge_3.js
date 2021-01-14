// input devices

class Gestures {
   constructor(output) {
      this.output = output;
   }
   tap = () => this.output.click();
   swipe = () => this.output.move();
   pan = () => this.output.drag();
   pinch = () => this.output.zoom();
}

class Mouse {
   constructor(output) {
      this.output = output;
   }
    click = () =>  this.output.click();
    move = () =>  this.output.move();
    down = () =>  this.output.drag();
    wheel = () =>  this.output.zoom();
}

// output devices

class Screen {
    click = () => console.log("Screen select");
    move = () => console.log("Screen move");
    drag = () => console.log("Screen drag");
    zoom = () => console.log("Screen zoom in");
}

class Audio {
    click = () => console.log("Sound oink");
    move = () => console.log("Sound waves");
    drag = () => console.log("Sound screech");
    zoom = () => console.log("Sound volume up");
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const screen = new Screen();
const audio = new Audio();

const hand = new Gestures(screen);
const mouse = new Mouse(audio);

hand.tap();
hand.swipe();
hand.pinch();

mouse.click();
mouse.move();
mouse.wheel();
