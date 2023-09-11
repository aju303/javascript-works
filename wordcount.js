var text="hello hai hello hai"

// counting the words
// var wc={}
// var words=text.split(" ");

// for (let w of words){
//     if (w in wc){
//         wc[w]+=1
//     }
//     else{
//         wc[w]=1
//     }
// }
// console.log(wc);
var wc={}
text.split(" ").map(w=> w in wc? wc[w]+=1 : wc[w]=1)
console.log(wc);