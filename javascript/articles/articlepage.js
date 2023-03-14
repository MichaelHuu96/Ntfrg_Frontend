// Get the ID from the URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const articleId = urlParams.get('id');

// Get the article data from the JSON file
fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const article = data.articles.find(a => a.ID === articleId);

    // Populate the article page with the data
    document.getElementById('article-title').textContent = article.title;
    document.getElementById('article-author').textContent = article.author; 
    document.getElementById('article-date').textContent = article.date;
    document.getElementById('article-summary').textContent = article.summary;
    document.getElementById('article-content').textContent = article.content;
  })
  .catch(error => console.error(error));

