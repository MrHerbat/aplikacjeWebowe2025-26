import fs from "node:fs"

const getAsyncFileContent = async (filePath:string) => {
    const fileContent = await fs.readFile(filePath, 'utf-8', (err,data)=>{
        if (err) throw err;
        console.log(data);
    });
    console.log(fileContent);
}
const setAsyncFileContent = async (filePath:string,data:string) =>{
    fs.writeFile(filePath,data,(err)=>{
        if (err) throw err;
    });
}
getAsyncFileContent("dane.txt");
setAsyncFileContent("output.txt","lorem lorem lorem lorem lorem").then(
    (result)=>console.log(result)
);