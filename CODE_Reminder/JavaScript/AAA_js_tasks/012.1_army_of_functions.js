function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = (function(y) {
            return () => console.log( y );
        })(i);
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();      // 0
army[5]();      // 5
