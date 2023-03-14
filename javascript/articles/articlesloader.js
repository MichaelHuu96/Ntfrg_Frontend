fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const articlesContainer = document.getElementById('articles-container');
    data.articles.forEach(article => {
      const articleCard = document.createElement('div');
      articleCard.className = 'col-lg-4 col-md-6 mb-4';
      articleCard.innerHTML = `
      <a href="article.html?id=${article.ID}" class="basic"">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title">${article.title}</h4>
            <h6 class="card-subtitle mb-2 text-muted">${article.author}</h6>
            <p class="card-text">${article.content}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted righttext">${article.date}</small>
          </div>
        </div>
      </a>
    `;
      articlesContainer.appendChild(articleCard);
    });
  })
  .catch(error => console.error(error));



  
