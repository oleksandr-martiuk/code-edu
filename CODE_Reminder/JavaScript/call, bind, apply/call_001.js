const training = {
   person: { fName: 'Bill', sName: 'Thompson' },
   go: function(distance, uom) {
      console.log(`${this.fName} ${this.sName} is running on the distance about ${distance} of ${uom}`);
   }
}

training.go(55, 'km');
training.go.call(training.person, 55, 'km');
training.go.call({fName: 'Yoshi', sName: 'Foo'}, 100, 'meters');
