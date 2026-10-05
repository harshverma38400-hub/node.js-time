// console.log(process.argv);
// console.log(process.argv.slice(2));
const arr = process.argv.slice(2);
if (arr.length > 0) {
    console.log("arguments passed");
    arr.forEach((arg, index) => {
        console.log(`${index}  ${arg}`);
    });
}
else {
    console.log("no arguments passed");
}
export {};
//# sourceMappingURL=app.js.map