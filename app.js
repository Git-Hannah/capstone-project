// import { promises as fs } from "fs";
import { writeFile } from "fs/promises";


console.log("Hello World");

writeFile("fox", "fire");
writeFile("hello.json", JSON.stringify({x:5, y:6}, null, 4));
// 4 ist der replacer