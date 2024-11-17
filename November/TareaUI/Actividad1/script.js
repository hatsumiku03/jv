// | Make the magic button disaparear | //
document.getElementById('btn-magic').addEventListener('click', function() {
    this.style.display = 'none';
});

// | Get a message from push button | //
document.getElementById('btn-pulsador').addEventListener('click', function() {
    alert('JSJSJSJSJSSJSJ, HAS PULSAO ESTE BOTÓN XDDDDD PRINGAO');
});

// | Get the inside value of movie button and show his display in the class | //
document.getElementById('btn-movies').addEventListener('click', function() {
    var submenuOfMovies = document.getElementById('movies-submenu');
    if (submenuOfMovies.style.display === 'none' || submenuOfMovies.style.display === '') {
        submenuOfMovies.style.display = 'block';
    } else {
        submenuOfMovies.style.display = 'none';
    }
});

// | Get the inside value of serie button and show his display in the class | //
document.getElementById('btn-series').addEventListener('click', function() {
    var submenuOfSeries = document.getElementById('series-submenu');
    if (submenuOfSeries.style.display === 'none' || submenuOfSeries.style.display === '') {
        submenuOfSeries.style.display = 'block';
    } else {
        submenuOfSeries.style.display = 'none';
    }
});
