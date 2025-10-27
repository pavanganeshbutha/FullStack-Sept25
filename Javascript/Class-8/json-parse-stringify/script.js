const person = {
    name: 'Max',
    age: 21,
    isAdult: true,
    favColors: ['blue', 'brown']
}

const jsonString = JSON.stringify(person);

console.log(jsonString);

const personObj = JSON.parse(jsonString);

console.log(personObj);