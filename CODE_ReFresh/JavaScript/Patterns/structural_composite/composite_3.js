class NodeComposition {
   add (child) {
      this.children.push(child);
   }

   remove(child) {
      this.children = this.children.filter(item => item !== child);
   }

   getChild (child) {
      return this.children.find(item => item === child);
   }

   hasChildren() {
      return !!this.children.length;
   }
}

class Node extends NodeComposition {
   constructor(name) {
      super();
      this.children = [];
      this.name = name;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const tree = new Node("root");
const left = new Node("left")
const right = new Node("right");
const leftLeft = new Node("left left");
const leftRight = new Node("left right");
const rightLeft = new Node("right left");
const rightRight = new Node("right right");

tree.add(left);
tree.add(right);
tree.remove(right);
tree.add(right);

left.add(leftLeft);
left.add(rightLeft);

right.add(leftLeft);
right.add(rightLeft);

console.log(tree.children);
