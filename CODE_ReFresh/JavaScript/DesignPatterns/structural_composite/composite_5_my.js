// Composite Interface
class AbstractComponent {
   constructor() {
      this.composite = {};
   }
   add(component) {
      throw 'method add() not implemented yet';
   }
   remove(component) {
      throw 'method remove() not implemented yet';
   }
}

// Composite
class Component extends AbstractComponent {
   constructor() {
      super();
   }
   add(name, element) {
      if (element instanceof Component) {
         this.composite[name] = element;
      } else {
         this.leaf = element;
      }
   }
   remove(name) {
      if (name) delete this.composite[name];
      else this.composite = {};
   }
   showChildren = (marker = '') => {
      const newMarker = marker + '   ';
      const keys = this.composite ? Object.keys(this.composite) : null;
      if (keys.length) {
         keys.forEach(keyName => {
            console.log(`${marker}> ${keyName}`)
            const item = this.composite[keyName];
            item.showChildren(newMarker);
         });
      }
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const document = new Component();
const html = new Component();
const head = new Component();
const headMeta = new Component();
const headTitle = new Component();
const headStyle = new Component();
const body = new Component();
const h1 = new Component();
const headings = new Component();
const section = new Component();
const footer = new Component();
const a1 = new Component();
const strong1 = new Component();
const a2 = new Component();
const strong2 = new Component();

document.add('html', html);
   html.add('head', head);
      head.add('headMeta', headMeta);
      head.add('headTitle', headTitle);
      head.add('headStyle', headStyle);
   html.add('body', body);
      body.add('h1', h1);
         h1.add('headings', headings);
      body.add('section', section);
      body.add('footer', footer);
      body.add('footer', 'Hello dear friends');
         footer.add('a1', a1);
         footer.add('strong1', strong1);
         footer.add('a2', a2);
         footer.add('strong2', strong2);
         footer.add('footer', 'email@world.com');
         footer.add('footer', 1234567890);

footer.remove('a2');
document.showChildren();

console.log(h1 instanceof Component);
console.log(Component instanceof Component);
console.log('hello' instanceof Component);
console.log(body.leaf);
console.log(footer.leaf);
