const army = (() => {
    let shooters = [];
    let i = 0;

    while (i < 10) {
        const shooter = () => console.log(shooter.a);
        shooters.push(shooter);
        shooter.a = i++;
    }

    return shooters;
})();

army[0]();      // 0
army[5]();      // 5
