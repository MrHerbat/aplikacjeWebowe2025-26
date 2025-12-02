import { readFileSync, writeFileSync } from "node:fs";
import { data } from "./cw1-data.js"

const fileContent = readFileSync("./dane.txt", "utf-8");
console.log(fileContent);
writeFileSync("output",data.join("/n"))