setTimeout(()=>{console.log("line 1");},3000)

console.log("line 2");

setTimeout(()=>{console.log("line 2.xx");},2000)
setTimeout(()=>{console.log("line 4");},0)

console.log("line 3");