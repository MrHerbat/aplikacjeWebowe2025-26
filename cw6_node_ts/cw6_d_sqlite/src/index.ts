// import { hello } from "./functions.js";

// console.log(hello("World"));
// // console.log(__dirname);
// // console.log(__filename);

import {  getAllUsers,addUser } from "./SqliteRepo.js";
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const main = async () => {
    const users = await getAllUsers();
    console.log(users);
    const answer1 = await rl.question("Czy dodać nowego użytkownika? (t/n) ")
        if(answer1.toLowerCase() === 't') {
        
        } else {
            console.log("Koniec programu.");
        }
        rl.close();
};
main();