
// console.log(process.argv);
// console.log(process.argv.slice(2));


const arr: String[]= process.argv.slice(2)

if(arr.length>0)
    {
        console.log("arguments passed");
        arr.forEach((arg,index)=>{
            console.log(`${index}  ${arg}`);
        
        })
}
else{
    console.log("no arguments passed");
    console.log("pass like this npm start harsh 111 verma 21 jd");
    
}