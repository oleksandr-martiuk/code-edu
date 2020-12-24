// interface
class ComponentWithContextualHelp {
   showHelp() {
      throw new Error('showHelp is not implemented');
   }
}

// abstract class 'Component'
class Component extends ComponentWithContextualHelp {
   constructor() {
      super();
      this.tooltipText = '';
      this.container = {};
   }
   showHelp() {
      if (this.tooltipText) {
         this.container.showHelp();
      } else {
         super.showHelp();
      }
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// abstract class 'Container'
class Container extends Component {
   constructor() {
      super();
      this.children = []
   }
   add(child) {
      this.children.push(child);
      child.container = this;
   }
}

class Button extends Component {
   constructor() {
      super();
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Panel extends Container {
   constructor() {
      super();
      this.modalHelpText = '';
   }
   showHelp() {
      super.showHelp();
   }
}

class Dialog extends Container {
   constructor() {
      super();
      this.wikiPageURL = '';
   }
   showHelp() {
      super.showHelp();
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const dialog = new Dialog('Budget Reports');
dialog.wikiPageURL = 'https://...';

const panel = new Panel(0, 0, 400, 800);
panel.modalHelpText = 'This panel does...';

const ok = new Button(250, 760, 20, 50, 'OK');
ok.tooltipText = 'This is an OK button that...';

const cancel = new Button(320, 760, 50, 20, 'Cancel');
//.........................................
panel.add(ok);
panel.add(cancel);
dialog.add(panel);

console.log(dialog);
