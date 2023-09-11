 
 
 let myPro=new Promise((res,rej)=>{
    let isjscompleted=true;
    if (isjscompleted){
        res("finished")
    }

 })

 myPro.then(res=>(console.log("lets start fetch")))