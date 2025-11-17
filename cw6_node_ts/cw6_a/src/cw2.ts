import { readFileSync } from "node:fs";

const fileContent = readFileSync("./dane.txt", "utf-8");
console.log(fileContent);