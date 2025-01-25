async function fetchNews() {
    const apiKey = 'ab4294b455a240ecad8a08feda4e4488';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }
      
      const data = await response.json();
      const newsList = document.getElementById('news');
      newsList.innerHTML = ''; // Clear previous news
      
      data.articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
          <h3>${article.title}</h3>
          <p>${article.description || 'No description available.'}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsList.appendChild(newsItem);
      });
    } catch (error) {
      document.getElementById('news').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  }
  