let value = 5;

function check(val) {
    try {
        if (isNaN(val)) {
            throw new Error("Not a number");
        } else {
            console.log("Got a number");
        }
    } catch (err) {
        console.error(`Error: ${err.message}`)
    } finally {
        console.log(`Value: ${val}`);
    }
}

check("asdf");
check(value);