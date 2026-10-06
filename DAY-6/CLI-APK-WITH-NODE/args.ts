
const args:String[] = process.argv.slice(2)

if(args.length==3){ 
 const [name,age,role]=args
 console.log("name:",name)
 console.log("age:",age)
 console.log("role:",role)
 
}
else{
    console.log("npx tsx args.ts harsh 21 dev write like this ");
    
}


