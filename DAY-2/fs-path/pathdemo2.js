

const path = require("path")

console.log("basename:",path.basename("data.ts"));
console.log("basename:",path.extname("data.ts"));
console.log("basename:",path.resolve("data.ts"));
console.log("dir:",path.dirname("data.ts"));


console.log("for absolute path:", path.resolve("harsh","lul.tsx") );

console.log("for join:", path.join("harsh","lul.tsx"))

console.log("for join:", path.parse("/Desktop/fullstack/Backend/DAY-2/harsh/lul.tsx "))
