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


const sumbtn = document.getElementById('summarize-btn');

const content = document.getElementById('article-content');

sumbtn.addEventListener('click', function() {
  fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const article = data.articles.find(a => a.ID === articleId);
    if(article.summarize==""){
      console.log(article.summarize);
      return;
    }
    content.textContent = article.summarize;
    document.getElementById('article-title').textContent = article.title_eng;

  })

});

const transbtn = document.getElementById('translate-btn');


transbtn.addEventListener('click', function() {
  fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const article = data.articles.find(a => a.ID === articleId);
    if (!article.translate) {
      return; // return if translate is empty
    }
    content.textContent = article.translate;
    document.getElementById('article-title').textContent = article.title_eng;
  })
});

const originalbtn = document.getElementById('original-btn');


originalbtn.addEventListener('click', function() {
  fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const article = data.articles.find(a => a.ID === articleId);
    content.textContent = article.content;
    document.getElementById('article-title').textContent = article.title;

  })

});


