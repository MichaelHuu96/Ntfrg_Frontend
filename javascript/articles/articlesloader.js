
let articledata;

function clearfilter(){
fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    articledata = data.articles;

    const articlesContainer = document.getElementById('articles-container');
    articlesContainer.innerHTML = '';
    data.articles.forEach(article => {
      const articleCard = document.createElement('div');
      articleCard.className = 'col-12';
      let tagsHTML = ''; // initialize empty string for tags
      if (article.tags.length > 0) { // check if tags exist
        for (let i = 0; i < article.tags.length; i++) {
            tagsHTML += `<a class="btn btn-secondary btn-lg category_tag" role="button" onclick="searchtags('${article.tags[i]}')">${article.tags[i]}</a>`;
        }
    }
    
    
      articleCard.innerHTML = `
      

      <a  class="basic" onclick="inspect_article('${article.ID}')">


          <div id="card-${article.ID}" class="card ">
            <div class="card-body ">
              <h4 class="card-title">${article.title}</h4>
              <h6 class="card-subtitle mb-2 text-muted">${article.author}</h6>
              <h8 class="date_text text-muted">March 17, 2023</h8>
              <p id="card-text-${article.ID}" class="card-text">${article.content}</p>
            </div>
            <div class="card-footer">
              <div class="footer-left">
           
              </div>
              <div class="footer-right">
                <div id="tag-container">
                  ${tagsHTML} 
                </div>
              </div>
            </div>
          </div>
        </a>
      `;
      articlesContainer.appendChild(articleCard);
    });

  
  })
  .catch(error => console.error(error));

}
  var inspected_article = ""; 

  function inspect_article(id) {

    fetch('articles.json?id='+id+'')
  .then(response => response.json())
  .then(data => {
  
    const article = data.articles.filter(article => article.ID === id)[0];
    inspected_article=article;
    const inspect_article_container = document.getElementById("inspect-article-container");
    const article_container = document.getElementById("articles-container");
    const inspect_title = document.querySelector('.inspect_title');
    const inspect_text = document.querySelector('.inspect_text');
    const inspect_tags = document.querySelector('.inspect_tags');
    console.log(article);
    console.log(article.content);
    inspect_article_container.classList.add("col-6");
    inspect_article_container.classList.remove("disabled");
    article_container.classList.add("col-6");
    article_container.classList.remove("col-12");
    inspect_title.innerText = article.title;
    inspect_text.innerText = article.content;


    let tagsHTML = ''; // initialize empty string for tags
    if (article.tags.length > 0) { // check if tags exist
      for (let i = 0; i < article.tags.length; i++) {
          tagsHTML += `<a class="btn btn-secondary btn-lg category_tag" role="button" onclick="searchtags('${article.tags[i]}')">${article.tags[i]}</a>`;
      }
  }
    inspect_tags.innerHTML = ''; // clear previous tags
    inspect_tags.insertAdjacentHTML('beforeend', tagsHTML);

  })
    .catch(error => console.error(error));

  }
  


function go_to_article(){
console.log(inspected_article);
window.location.href = "article.html?id=" + inspected_article.ID;
}


function searchtags(searchtag){
  console.log(searchtag);
  const articlesContainer = document.getElementById('articles-container');
  articlesContainer.innerHTML = '';
  articledata.forEach(article => {

    if ( article.tags.some(tag => tag.toLowerCase().includes(searchtag.toLowerCase()))) {
    const articleCard = document.createElement('div');
    articleCard.className = 'col-12';
    let tagsHTML = ''; // initialize empty string for tags
    if (article.tags.length > 0) { // check if tags exist
      for (let i = 0; i < article.tags.length; i++) {
          tagsHTML += `<a class="btn btn-secondary btn-lg category_tag" role="button" onclick="searchtags('${article.tags[i]}')">${article.tags[i]}</a>`;
      }
  }
    articleCard.innerHTML = `
    

    <a  class="basic" onclick="inspect_article('${article.ID}')">


        <div id="card-${article.ID}" class="card ">
          <div class="card-body ">
            <h4 class="card-title">${article.title}</h4>
            <h6 class="card-subtitle mb-2 text-muted">${article.author}</h6>
            <h7 class="date_text text-muted">March 17, 2023</h7>
            <p id="card-text-${article.ID}" class="card-text">${article.content}</p>
          </div>
          <div class="card-footer">
            <div class="footer-left">
        
            </div>
            <div class="footer-right">
              <div id="tag-container">
                ${tagsHTML} 
              </div>
            </div>
          </div>
        </div>
      </a>
    `;
    articlesContainer.appendChild(articleCard);
  }});
}
  

  const searchInput = document.querySelector('#search-input');

  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.trim();
    search_article(searchText);
  });


  function search_article(searchText) {
    console.log(searchText);
  
    const articlesContainer = document.getElementById('articles-container');
    articlesContainer.innerHTML = '';
    articledata.forEach(article => {

      if (article.title.toLowerCase().includes(searchText.toLowerCase()) || 
      article.tags.some(tag => tag.toLowerCase().includes(searchText.toLowerCase()))) {
      const articleCard = document.createElement('div');
      articleCard.className = 'col-12';
      let tagsHTML = ''; // initialize empty string for tags
      if (article.tags.length > 0) { // check if tags exist
        for (let i = 0; i < article.tags.length; i++) {
            tagsHTML += `<a class="btn btn-secondary btn-lg category_tag" role="button" onclick="searchtags('${article.tags[i]}')">${article.tags[i]}</a>`;
        }
    }
      articleCard.innerHTML = `
      

      <a  class="basic" onclick="inspect_article('${article.ID}')">


          <div id="card-${article.ID}" class="card ">
            <div class="card-body ">
              <h4 class="card-title">${article.title}</h4>
              <h6 class="card-subtitle mb-2 text-muted">${article.author}</h6>
              <h7 class="date_text text-muted">March 17, 2023</h7>
              <p id="card-text-${article.ID}" class="card-text">${article.content}</p>
            </div>
            <div class="card-footer">
              <div class="footer-left">
            
              </div>
              <div class="footer-right">
                <div id="tag-container">
                  ${tagsHTML} 
                </div>
              </div>
            </div>
          </div>
        </a>
      `;
      articlesContainer.appendChild(articleCard);
    }});
  }

  clearfilter();