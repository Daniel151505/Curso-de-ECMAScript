function newFunction(name, age, country) {
    var name = name || 'Oscar';
    var edad = edad || 32;
    var country = country || 'ARG';
    console.log(name, edad, country);
}

// es6
function newFucntion2(name = "Oscar", age = 30, country = "ARG") {
    console.log(name, age, country);
}
newFucntion2();
newFucntion2('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);