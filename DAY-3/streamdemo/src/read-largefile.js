// only for read
import fs from "fs"
import readline from "readline"

// Readable stream
// bss read krrni hai
const fileStream = fs.createReadStream("large-file.txt", {
    encoding: "utf-8"
});

// readline interface
const r1 = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

 const processFile = async()=> {

    let lineNumber = 0;

    for await (const line of r1) {

        lineNumber++;

        console.log(`Line ${lineNumber}: ${line}`);
    }

    console.log(`Finished. Total lines: ${lineNumber}`);
}

processFile();