// expected: 
// ["foo", "bar", "baz"]

// command: node args.js foo bar baz

// Nicht notwendig, da wir es unten voranstellen:
// import { argv } from 'process';

// argv.forEach((val, index) => {
//     //console.log(`${index}: ${val}`),
//     //console.log(`[${val}]`),
//     array = [],
//     console.log(`array.push(${val})`);
// });

const args = process.argv.slice(2);
console.log(args);

// Array destructuring:
// const [command, file, ...args2] = process.argv

// geht auch ohne Worte:
const [, , ...args2] = process.argv
console.log(args2);