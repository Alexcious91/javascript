let stringOne = 'hello world';
let webURI = `https://www.basescripts.com?${stringOne}=`;

let encodedString = encodeURIComponent(stringOne);
let decodedString = decodeURIComponent(encodedString);

let encodedWebURI = encodeURI(webURI);
console.log(`Encoded Web URI: ${encodedWebURI}`);


console.log(`Original String: ${stringOne}`);
console.log(`Encoded String: ${encodedString}`);
console.log(`Decoded String: ${decodedString}`);




