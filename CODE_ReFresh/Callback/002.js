const fun = exec => {
    console.log(exec);
    const some = (num) => console.log('YO ---> ', num);
    exec(some);
}

fun(
    // () => console.log('FIRST')
    // arg => arg(42)
    arg => arg(42)
);

// fun();
