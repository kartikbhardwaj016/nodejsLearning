const fs = require('fs');

const start = Date.now();
fs.readFile('text.txt',(data) =>{
  // console.log(data);
  console.log(Date.now()-start);
})
fs.readFile('./text.txt',(err,data) =>{
  // console.log(data);
  console.log(Date.now()-start);
})




const FuncAsync = (a) =>{
  return new Promise((resolve, reject) =>{
    fs.readFile(a,(err,data)=>{
      if(err)
      {
        reject(err);
      }
      resolve(data);
    })
    resolve(func(a));
  });
}

FuncAsync('./text.txt').then(val = > console.log(Date.now - start)).catch(err => console.log(err));

console.log("end");