var flag=true;

function displayNumber(event){
    // let textBox=document.querySelector("#result")   no need to write like this coz result is a id which is unique
    if(flag){
        result.value+=event.target.value;
    }
    else{
        result.value=event.target.value;
        flag=true
    }
}

function clearBox(){
    result.value=""
}

function evaluateExpression(){
    let curExp=result.value;
    let out=eval(curExp)
    result.value=out
    flag=false;
}