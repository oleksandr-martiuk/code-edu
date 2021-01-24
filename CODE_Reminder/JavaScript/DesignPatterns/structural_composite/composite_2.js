class Component { // общий интерфейс для всех элементов системы
   static counter = 0; // считает количество добавленных элементов. Номер добавленного элемента записываетс как его id
   constructor() {
      this.parentsNum = 0; // количество родителей элемента (уровень вложенности)
      this.elemPrefix = ''; // (определяет количество отступов при выводе элементов)
      this.elemsList = []; // хранится результат GetElemList()
      this.id = Component.counter; // присваиваем данному элементу при создании его id
      Component.counter++;
   }
   ShowHierarchy (){ // выводит иерархию всех элементов Компоновщика
      this.elemPrefix = this.setPrefixLength(this.parentsNum);
   }
   Add (Component){ // добавляет элементы в компановщик
      throw new Error(`В ${this.constructor.name} не описан метод Add()`);
   }
   Remove (Component){
      throw new Error(`В ${this.constructor.name} не описан метод Remove()`);
   }
   GetChild (key){
      return this.children[key]
   }
   GetAllChildren (){ // Выводит массив всех элементов компановщика без иерархии.
      // Соответственно можно обрабатывать скопом данные из всех элементов
      throw new Error(`В ${this.constructor.name} не описан метод GetAllChildren()`);
   }
   GetChildrenByParentId() {
      throw new Error(`В ${this.constructor.name} не описан метод GetChildrenByParentId()`);
   }
   setPrefixLength(count) { //функция определяет длину префикса elemPrefix выводимого в ShowHierarchy()
      let pre = '';
      for (let i = 0; i < count; i++) {
         pre += '----';
      }
      return pre;
   }
}

class Leaf extends Component { // одиночный элементо системы (не может иметь потомков)
   constructor(name) {
      super();
      this.name = name
      console.log('Leaf created')
   }
   ShowHierarchy (){
      super.ShowHierarchy();
      console.log(this.elemPrefix+this.name)
   }
}

class Composite extends Component { // сборный элемент системы. Может включать в себя другие Leaf или Composite.
   constructor(name) {
      super();
      this.name = name
      this.children = []
      console.log('Composite created')
   }
   ShowHierarchy (){
      super.ShowHierarchy();
      console.log(this.elemPrefix+this.name + ' (Composite)')
      for(const i in this.children)
         this.children[i].ShowHierarchy()
   }
   Add (elem){
      elem.parentsNum = this.parentsNum +1;
      elem.parentId = this.id; // присваиваем добавляемому элементу parentId в виде id эл-та в который идет добавление
      this.children.push(elem)
   }
   Remove (elem){
      for(const i in this.children)
         if(this.children[i] === elem)
            this.children.splice(i, 1)
   }
   GetChild (key){
      return this.children[key]
   }
   GetAllChildren (childrenArr){ // возвращает массив элементов, включая вложенные элементы.
      if (!childrenArr) { // обнуляем массив при НЕрекурсивном вызове метода, иначе данные копятся
         this.elemsList = [];
         childrenArr = this.children;
      }
      for(const i in childrenArr) {
         this.elemsList.push(childrenArr[i]/*.name*/);
         if (childrenArr[i].children) { // если есть потомки, то для них рекурсивно вызываем этот же метод
            this.GetAllChildren(childrenArr[i].children)
         }
      }
      return this.elemsList;
   }
   GetChildrenByParentId(parentId) {
      this.GetAllChildren();
      const arrLength = this.elemsList.length;
      for (let i = 0; i < arrLength; i++) {
         if (this.elemsList[i].id == parentId) {
            console.log(this.elemsList[i].GetAllChildren());
         }
      }
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const animal = new Composite('Животные')
animal.Add(new Leaf('Рыбы'))
animal.Add(new Leaf('Птицы'))
const mammals = new Composite('Млекопитающие')
animal.Add(mammals)
mammals.Add(new Leaf('Медведи'))
const dogs = new Composite('Собаки')
mammals.Add(dogs)
dogs.Add(new Leaf('Крупные'))
dogs.Add(new Leaf('Карликовые'))
mammals.Add(new Leaf('Киты'))
const plants = new Composite('Растения')
animal.Add(plants)
plants.Add(new Leaf('Дуб'))
plants.Add(new Leaf('Береза'))
plants.Add(new Leaf('Сосна'))

animal.ShowHierarchy()

let elemList = animal.GetAllChildren();
console.log(elemList);

animal.GetChild(1).ShowHierarchy()

function findElemById (arr, id) {
   // функция находит в массиве elemList элемент по id
   arr.forEach(item => (item.id === id) && console.log(`Найден элемент с id ${item.id}: ${item.name}`));
}
findElemById(elemList, animal.children[2].children[0].parentId);
