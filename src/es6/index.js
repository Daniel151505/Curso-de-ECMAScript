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

// -- LET y CONST, Multilínea, Spread Operator y Desestructuración --

let lorem = "Tres tristes tigres comen trigo en un trigal \n" + "frase aparte."

// es6
let lorem2 = `Tres tristes tigres comen trigo en un trigal
ahora es otra frase
`;

console.log(lorem)
console.log(lorem2)


let person = {
    'name': 'oscar',
    'age': 21,
    'country': 'MX'
}

console.log(person.name, person.age);

// es6
let { name, age, country} = person;
console.log(name, age , country)

// es6
let team1 = [
    'Oscar',
    'Julian',
    'Ricardo'
];

let team2 = [
    'Valeria',
    'Yesica',
    'Camila'
];

let education = ['David', ...team1, ...team2]
console.log(education);

// ......
{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);


//........
const a = 'b';
a = 'a';

var b = 'b';
a = 'a';

console.log(a)
console.log(b)