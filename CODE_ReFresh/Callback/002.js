const fun = exec => {
    console.log(exec);

    const some_1 = (num) => console.log('YO ---> ', num);
    exec(some_1);

    const some_2 = exec(i => i*10);
    console.log('some_2: ', some_2);
}

fun(
    // () => console.log('FIRST')
    // arg => arg(42)
    arg => arg(42)
);

// fun();
