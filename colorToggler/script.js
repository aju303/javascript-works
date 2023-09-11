

// function toggleColor(){

    // let myDiv=document.querySelector("#result")
    // // myDiv.style.backgroundColor="red"
    // // myDiv.style.color="white"
    // myDiv.classList.add("bg-danger")
    // myDiv.classList.add("text-white")

// }

function toggleColor(event){
    let btn=event.target.name
    let myDiv=document.querySelector("#result")
    if (btn=="redButton"){
        myDiv.classList.remove("bg-success")
        myDiv.classList.add("bg-danger")
    }
    if (btn=="greenButton"){
        myDiv.classList.add("bg-success")
        myDiv.classList.remove("bg-danger")
    }
}

function changeTheme(){
    let myLink=document.querySelector("#theme")
    let curTheme=myLink.getAttribute("href")
    console.log(curTheme);
    if(curTheme=="./lightmode.css"){
        myLink.href="darkmode.css"
    }
    if(curTheme=="darkmode.css"){
        myLink.href="./lightmode.css"

    }

}