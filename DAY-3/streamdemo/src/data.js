// const { Readable, Writable } = require("stream");
import { Readable } from "stream";
import { Writable } from "stream";


const readable = new Readable({
    read(){
        this.push("helllyaa");
       this.push("yuhu");
        this.push(null);
    }
})


const writeable =new Writable({
    write(chunk,encoding,callback){
        console.log(`we get it : ${chunk.toString()}`);
        callback()
    }
})

readable.pipe(writeable)

writeable.on("finish",()=>{
    console.log("finally done ");
})

