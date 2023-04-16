fetch('movies.json')
  .then(response => response.json())
  .then(data => {
    // Store movie data in an array
    const movies = data;

    // Function to filter movies based on user input
    const filterMovies = () => {
      const genre = document.getElementById('genreSelect').value;
      const year = document.getElementById('yearSelect').value;
      const rating = document.getElementById('ratingSelect').value;

      // Clear existing movie cards
      document.getElementById('moviesContainer').innerHTML = '';

      // Filter movies based on user input
      const filteredMovies = movies.filter(movie => {
        return (genre === '' || movie.genre === genre) &&
               (year === '' || movie.year === year) &&
               (rating === '' || movie.rating >= rating);
      });

      // Generate movie cards for filtered movies
      filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movieCard');
        movieCard.innerHTML = `
          <h2>${movie.title}</h2>
          <img src="${movie.image}">
          <p>Genre: ${movie.genre}</p>
          <p>Year: ${movie.year}</p>
          <p>Rating: ${movie.rating}</p>
        `;