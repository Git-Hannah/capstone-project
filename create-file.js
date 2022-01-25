import {promises as fs} from 'fs';
import {readFile } from 'fs/promises';
import { writeFile } from 'fs/promises';

readFile("./hello.json", "utf8")
.then((data) => {
    return JSON.parse(data)
})