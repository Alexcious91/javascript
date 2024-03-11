const searchIndex = document.getElementById("sText");
const replaceIndex = document.getElementById("rText");
const output = document.getElementById("output");

document.querySelector("button").addEventListener("click", lookup);

function lookup() {
    let s = output.textContent;
    let rt = searchIndex.value;

    const regex = new RegExp(rt, 'gi');

    if (s.match(regex)) {
        s = s.replace(regex, replaceIndex.value);
        output.textContent = s;
    }
}

