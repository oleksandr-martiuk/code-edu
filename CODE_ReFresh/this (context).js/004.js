const obj = {
    a: 5,
    run: () => {
        const name = 'Bill';
        return () => {
            function inRun(){
                const some = 'SOME_TEXT';
                console.log(this);
            };
            inRun();
        }
    }
}

const runA = obj.run();
runA(); // Object [global] {...}
