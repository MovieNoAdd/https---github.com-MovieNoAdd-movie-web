// Sample movie data - replace with your actual data
const movies = [
    {
      title: "Dragon (2025)",
      year: "2025",
      genre: "Action/Sci-Fi",
      thumbnail: "images/thumbnails/dragon.jpg",
      page: "movies/dragon.html"
    },
    {
      title: "Vaathi (2023)",
      year: "2023",
      genre: "Drama/Action",
      thumbnail: "images/thumbnails/vaathi.jpg",
      page: "movies/vaathi.html"
    }
    // Add more movies...
  ];
  
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  
  // Search functionality
  function handleSearch(query) {
    const results = movies.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  
    searchResults.innerHTML = '';
  
    if (results.length > 0) {
      results.forEach(movie => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
          <img src="${movie.thumbnail}" alt="${movie.title}">
          <div>
            <h4>${movie.title}</h4>
            <p>${movie.year} • ${movie.genre}</p>
          </div>
        `;
        resultItem.addEventListener('click', () => {
          window.location.href = movie.page;
        });
        searchResults.appendChild(resultItem);
      });
      searchResults.style.display = 'block';
    } else {
      searchResults.innerHTML = '<div class="no-results">No movies found</div>';
      searchResults.style.display = 'block';
    }
  }
  
  // Event listeners
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length > 2) {
      handleSearch(query);
    } else {
      searchResults.style.display = 'none';
    }
  });
  
  // Close search when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      searchResults.style.display = 'none';
    }
  });