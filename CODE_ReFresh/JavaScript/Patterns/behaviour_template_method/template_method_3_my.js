class Sport {
  constructor(type, result, award) {
    this.type = type;
    this.result = result || '';
    this.award = award || null
  }
  getResult() {
    if (this.award) {
      console.log(`${this.name} ${this.surname} won "${this.award}" in "${this.type}" for the result: ${this.result}`)
    } else {
      console.log(`${this.name} ${this.surname} doesn't have any awards yet`);
    }
  }
}

class Swim extends Sport {
  constructor(name, surname, result, award) {
    super('Swimming', result, award);
    this.name = name;
    this.surname = surname;
  }
  train = () => console.log(`${this.name} is preparing to the Swimming championship`);
}

class Chess extends Sport {
  constructor(name, surname, result, award) {
    super('Chess', result, award);
    this.name = name;
    this.surname = surname;
  }
  calculate = () => console.log(`${this.name} is calculate next step`);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const alla = new Swim('Alla', 'Bergh');
const igor = new Chess('Igor', 'Sidorov', 'mat on 63-rd minutes', '2nd pace of the WorldChampionship')

alla.getResult()
igor.getResult()
