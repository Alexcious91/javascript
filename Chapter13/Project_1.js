const allowedPasswords = ["asdf", "qwer", "12345"];

const loginFunction = (password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let allowed = false;

            for (let i = 0; i < allowedPasswords.length; i++) {
                if (allowedPasswords[i] === password) {
                    allowed = true;
                    break;
                }
            }

            if (allowed) {
                resolve({ allowed: true });
            } else {
                reject({ allowed: false });
            }
        })
    })
};

const executorFunction = async (value) => {
    let data = await loginFunction(value);
    console.log(data);
};

executorFunction("asdf")


