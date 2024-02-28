const people = {
    friends: []
};

let friend1 = {
    firstName: "Alex",
    lastName: "Mourinho",
    id: 4000
}

let friend2 = {
    firstName: "Maddy",
    lastName: "Chelsea",
    id: 4000
}

let friend3 = {
    firstName: "Andy",
    lastName: "Kulture",
    id: 4000
}

people.friends.push(friend1, friend2, friend3);

console.log(people);
