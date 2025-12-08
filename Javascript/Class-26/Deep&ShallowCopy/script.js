// -------------------Shallow Copy---------

const person = {
    name: 'Max',
    age: 25,
    hobbies: ['Swimming', 'Tennis'],
    address: {
        country: 'India',
        state: 'Delhi'
    }
}

// // spread operator, Object.assign() -> shallow copy
const personCopy = { ...person };

// --------------------Deep Copy-------------

const personDeepCopy = JSON.parse(JSON.stringify(person));



function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (obj instanceof Array) {
        const copy = [];
        for (let i = 0; i < obj.length; i++){
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }

    const copy = {};
    for (const attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = deepClone(obj[attr]);
        }
    }
    return copy;
}

const deepObj = deepClone(person);


