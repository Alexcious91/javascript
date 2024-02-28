let prize = parseInt(prompt("Pick a number 0-10"));

let output = "My Selection: ";

switch (prize){
    case 0: 
        output += "R500";
    case 1:
        output += "R1000 ";
        break;
    case 2:
        output += "Big ";
    case 3:
        output += "Box of chocolates";
        break;
    case 4:
        output += "Silver rock & ";
    case 5:
        output += "Golden Boot";
        break;
    default:
        output += "Sorry Try Again";
}
console.log(output);
