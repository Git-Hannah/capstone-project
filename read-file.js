// import { promises as fs } from "fs";
import { readFile } from "fs/promises";

readFile('./test.txt', 'utf8').then(data => {
    console.log(data)
});

readFile('./hello.json', 'utf8').then(data => {
    console.log(JSON.parse(data))
})
