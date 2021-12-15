const express = require('express');
const multer = require('multer');
const app = express();


const myStorage = multer.diskStorage({
  destination:function(req,file,cb) {
    cb(null,'uploads/');
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const [name, extension] = file.originalname.split('.');
    cb(null,file.fieldname+'-'+uniqueSuffix+'.'+extension);
  }

})
const uploads = multer({storage:myStorage,
  limits:{fileSize:1000}});
app.post('/file', uploads.single('file'), (req,res,next)=>{
  console.log(req.body);
  console.log(req.file);
  res.json(req.file);
})


app.listen(3000,()=>{
  console.log('server started');
})