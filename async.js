const func = ( a ) => {
  if(a==1)
  {
    return 1;
  }
  if(a ===2)
  {
    return 1;
  }
  return func(a-1) + func(a-2);
}

const FuncAsync = (a) =>{
  return new Promise((resolve, reject) =>{
    resolve(func(a));
  });
}

let start = Date.now();
FuncAsync(40).then(val => console.log(Date.now() - start));
FuncAsync(40).then(val => console.log(Date.now() - start));
FuncAsync(40).then(val => console.log(Date.now() - start));

// FuncAsync(40).then(val => console.log(Date.now() - start));


console.log("end");