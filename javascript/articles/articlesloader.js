fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const articlesContainer = document.getElementById('articles-container');
    data.articles.forEach(article => {
      const articleCard = document.createElement('div');
      articleCard.className = '';
      let tagsHTML = ''; // initialize empty string for tags
      if (article.tags.length > 0) { // check if tags exist
        for (let i = 0; i < article.tags.length; i++) {
          tagsHTML += `<a href="#" class="btn btn-secondary btn-lg disabled catergory_tag" role="button" aria-disabled="true">${article.tags[i]}</a>`;
        }
      }

      // <a href="article.html?id=${article.ID}" class="basic"">
      
      articleCard.innerHTML = `
      
      <a href="#" class="basic " onclick="changeCardTextHeight('${article.ID}'); event.preventDefault();">
          <div id="card-${article.ID}" class="card ">
            <div class="card-body col">
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
                  ${tagsHTML} <!-- insert tags HTML here -->
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




  function changeCardTextHeight(id) {
    const cardTextonid = document.getElementById("card-text-"+id);
    const cardText = document.getElementById("card-text-"+id);
    const cardBodies = document.querySelectorAll(".card");
    const cardID =document.getElementById("card-"+id)

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
  
