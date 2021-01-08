class Node {
   constructor(name) {
      this.children = [];
      this.name = name;
   }
   add(child) {
      this.children.push(child);
   }
   remove(child) {
      this.children = this.children.filter(item => item !== child);
   }

   getChild = child => this.children.find(item => item === child);

   hasChildren = () => !!this.children.length;
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const tree = new Node("root");
   const left = new Node("left")
      const leftLeft = new Node("left left");
      const leftRight = new Node("left right");
   const right = new Node("right");
      const rightLeft = new Node("right left");
      const rightRight = new Node("right right");

tree.add(left);
   left.add(leftLeft);
   left.add(rightLeft);
tree.add(right);
tree.remove(right);
tree.add(right);
   right.add(leftLeft);
   right.add(rightLeft);

console.log(tree.children);
