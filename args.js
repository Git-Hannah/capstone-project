// expected: 
// ["foo", "bar", "baz"]

// command: node args.js foo bar baz


const args = process.argv.slice(2);
console.log(args);

// Array destructuring:
// const [command, file, ...args2] = process.argv

// geht auch ohne Worte:
const [, , ...args2] = process.argv
console.log(args2);



// Nicht notwendig, da wir es unten voranstellen:
// import { argv } from 'process';

// Andere Lösung, nicht ganz richtiger Output:
// argv.forEach((val, index) => {
//     //console.log(`${index}: ${val}`),
//     //console.log(`[${val}]`),
//     array = [],
//     console.log(`array.push(${val})`);
// });