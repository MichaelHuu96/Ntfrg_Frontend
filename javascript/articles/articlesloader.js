

fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    articledata = data;
    const articlesContainer = document.getElementById('articles-container');
    data.articles.forEach(article => {
      const articleCard = document.createElement('div');
      articleCard.className = 'col-12';
      let tagsHTML = ''; // initialize empty string for tags
      if (article.tags.length > 0) { // check if tags exist
        for (let i = 0; i < article.tags.length; i++) {
          tagsHTML += `<a href="#" class="btn btn-secondary btn-lg  category_tag" role="button" >${article.tags[i]}</a>`;
        }
      }

     
      articleCard.innerHTML = `
      

      <a  class="basic" onclick="inspect_article('${article.ID}')">


          <div id="card-${article.ID}" class="card ">
            <div class="card-body ">
              <h4 class="card-title">${article.title}</h4>
              <h6 class="card-subtitle mb-2 text-muted">${article.author}</h6>
              <p id="card-text-${article.ID}" class="card-text">${article.content}</p>
            </div>
            <div class="card-footer">
              <div class="footer-left">
                <p class="date_text">March 17, 2023</p>
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

  function inspect_article(id) {

    fetch('articles.json?id='+id+'')
  .then(response => response.json())
  .then(data => {
    const article = data.articles.filter(article => article.ID === id)[0];
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
        tagsHTML += `<a href="#" class="btn btn-secondary btn-lg category_tag" role="button">${article.tags[i]}</a>`;
      }
    }
    inspect_tags.innerHTML = ''; // clear previous tags
    inspect_tags.insertAdjacentHTML('beforeend', tagsHTML);

  })
    .catch(error => console.error(error));

  }
  





  function changeCardTextHeight(article) {
    const cardTextonid = document.getElementById("card-text-"+article.ID);
    const cardText = document.getElementById("card-text-"+article.ID);
    const cardBodies = document.querySelectorAll(".card");
    const cardID =document.getElementById("card-"+article.ID);

    if (cardTextonid) {
      cardTextonid.style.height = "auto";
      cardTextonid.style.maxHeight = "none";
      // for (let i = 0; i < cardBodies.length; i++) {

      //   console.log("current: " + cardBodies[i].style.width)
      //   cardBodies[i].style.width = "30vw";
      //   console.log("changed width of " + cardBodies[i]);
      //   console.log("to: " + cardBodies[i].style.width)

      // }
    }

  }
  

