import { data } from "./cw1-data.js";
function helloName(name: string):string{
    return `Hello, ${name}!`;
}
for (const item of data){
    console.log(helloName(item));
}