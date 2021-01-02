class Sport {
  constructor(type, name, surname, result, award) {
    this.type = type;
    this.result = result || null;
    this.award = award || null;
    this.name = name || null;
    this.surname = surname || null;
  }
  getAwardedResult() {
    if (this.award) {
      console.log(`${this.name} ${this.surname} won "${this.award}" in "${this.type}" for the result: ${this.result}`);
    } else {
      console.log(`${this.name} ${this.surname} doesn't have any awards yet`);
    }
  }
}

class SwimSportsman extends Sport {
  constructor(name, surname, result, award) {
    super('Swimming', name, surname, result, award);
  }
  train = () => console.log(`${this.name} is preparing to the Swimming championship`);
}

class ChessSportsman extends Sport {
  constructor(name, surname, result, award) {
    super('Chess', name, surname, result, award);
    this.name = name;
    this.surname = surname;
  }
  calculate = () => console.log(`${this.name} is calculate next step`);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const alla = new SwimSportsman('Alla', 'Bergh');
const igor = new ChessSportsman('Igor', 'Sidorov', 'checkmate on move 63', '2nd place in the World Championship');

alla.getAwardedResult();
igor.getAwardedResult();
