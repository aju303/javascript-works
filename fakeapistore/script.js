// step 1 create xmlhttp request object

//  var request=new XMLHttpRequest()

//  step 2 call open (methoed,url) methoed

// request.open("get","https://fakestoreapi.com/products")

// step 3 call send

// request.send()

// request.onreadystatechange=()=>{
//     if (request.readyState==4){
//         if(request.status >= 200 && request.status < 300){
//             let data=JSON.parse(request.responseText)
//             console.log(data);
//         }
//     }

// }


// this is a lengthy process thats why we use fetch

// fetch("https://fakestoreapi.com/products").then (res=>res.json()).then(data=>console.log(data))

// json.parse(data)  to convert string or json type to javascript native language

// json.stingif(data) to convert js to string or json type


// fetch()

fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>console.log(data))