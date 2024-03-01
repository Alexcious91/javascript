function outerFunction (nr) {
    console.log("Outer function");
    innerFunction(nr);

    function innerFunction(x) {
        console.log(x + 7);
        console.log("Have access to outer variables: ", nr);
    }
}

outerFunction(3)