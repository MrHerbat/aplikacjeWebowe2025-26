import { NWD, recNWD } from "./funckje.js"
import readLine from "node:readline/promises"

const readObject = readLine.createInterface({
    input:process.stdin,
    output: process.stdout
});

const main = async () =>{

    const choice = await readObject.question("wybierz metodę \n r - rekurencyjnie | i - iteracyjnie \n");

    const answer_a = await readObject.question("Podaj liczbe a: ");
    const answer_b = await readObject.question("Podaj liczbe b: ");

    let a: number = +answer_a;
    let b: number = +answer_b;

    if(choice=="r"){
        console.log("rekurcyjnie NWD podanych liczb to:",recNWD(a,b));
    }else{
        console.log("iteracyjnie NWD podanych liczb to:",NWD(a,b));
    }
    readObject.close();
};
main();