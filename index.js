const e = require('express');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded())


app.post('/path', async(req,res,next)=>{
  const data = await func();
  res.send(data);
})
app.post('/api2',(req,res,next) =>{
  const data = func2(req.body.n);
  res.send(data+" ");
})
app.get('/health', (req,res,next)=>{
  res.send('ok');
})
app.post('/fileAPI', (req,res,next)=>{
console.table(req.headers);
console.log(req.body);
console.log(req.ip);
console.log(req);
});






const func = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("success");
    },10000)
  })
}


const func2 = ( a ) => {
  // if(!a)
  // {
  //   return 0;
  // }
  // if(a==1)
  // {
  //   return 1;
  // }
  // if(a ===2)
  // {
  //   return 1;
  // }
  // return func(a-1) + func(a-2);
  for(let i=0;i<10e9;i++)
  {

  }
  return "compeleted";
}
app.listen(3000);