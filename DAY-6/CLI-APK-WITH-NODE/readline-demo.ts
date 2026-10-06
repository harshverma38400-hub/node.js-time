import { createInterface } from "readline/promises";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const name= await rl.question("whats ur name")
  const age =await rl.question("whats ur age")

  console.log(name);
  console.log(age);

  rl.close(); //Ab mujhe terminal se aur input nahi lena, readline interface close kar do

  
  