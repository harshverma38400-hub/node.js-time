// import fs from "fs"
const fs = require("fs");

function wrritingTheReq(filename) {
return (req, res, next) => {
fs.appendFile(
filename,
`${Date.now()} : ${req.method} : ${req.path}\n`,
(err) => {
if (err) {
console.log(err);
return next(err);
}
 next()

}
)}
}


module.exports = { wrritingTheReq }
