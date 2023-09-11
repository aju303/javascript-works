
function getCategory(){

  fetch(`https://newsapi.org/v2/sources?apiKey=638cd6870fb14895ac1c298d6767a1d1`).
  then(res=>res.json()).then(data=>category(data))

  function category(data){
    let categories = new Set(data.sources.map(sources => sources.category));
    console.log(categories);

    htmlcategory=``
    for (let c of categories){
      htmlcategory+=`
      <button class="btn btn-outline-info" type="button">${c}</button>
      `
    }  }
      id_category.innerHTML=htmlcategory

}


function getNews(){
    
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=638cd6870fb14895ac1c298d6767a1d1`).
    then(res=>res.json()).then(data=>headlines(data))

}

 
function headlines(data){
    let news=data.articles;
    let htmlData=``
    news.forEach(function(article){
    let title=article.title;
    let image=article.urlToImage;
    let description=article.description;
    let content=article.content;
    let url=article.url;
    let time=article.publishedAt;
        
    htmlData+=`



    <div class="card text-bg-secondary ms-3 mb-3 " style="width: 18rem; ">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Title:${title}</h5>
    <hr>
    <p class="card-text">Description:  ${description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Brief Content:  ${content}</li>
    <li class="list-group-item">Published at:  ${time}</li>
  </ul>
  <div class="card-body text-bg-light">
    <a href="#" class="card-link">Url Link:  ${url}</a>
  </div>
</div>   
    
      
    `
    });  
    console.log(htmlData);
    id_news.innerHTML=htmlData


} 

    





