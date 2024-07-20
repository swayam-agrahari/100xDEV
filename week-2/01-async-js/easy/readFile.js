const fs = require('fs');
text = "HEy this is the text."
// fs.writeFile('a.txt', text,(err)=>{
//     console.log("Data written");
// })
fs.readFile("a.txt", 'utf-8', (err,text)=>{
   let  str = text.replace(/\s+/g," ");
    console.log(str)
})
