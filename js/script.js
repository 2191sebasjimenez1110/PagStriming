
document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        const searchTerm = e.target.value.toLowerCase();
        if (e.key === "Escape") e.target.value = ""
        document.querySelectorAll('.tarjeta').forEach(pelicula => {
            const titulo = pelicula.querySelector('.titulo3').textContent.toLowerCase();
            if (titulo.includes(searchTerm)) {
                pelicula.classList.remove("filtro");

            } else {
                pelicula.classList.add("filtro");
            }
        });

    }

});
const searchInput = document.getElementById('searchInput');
const peliculasContainer = document.querySelector('.peliculas_series');
const peliculas = Array.from(peliculasContainer.querySelectorAll('.containerti'));


searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

  
    peliculas.forEach(pelicula => {
        const title = pelicula.querySelector('.titulo1').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            pelicula.style.display = 'block';
        } else {
            pelicula.style.display = 'none';
        }
    });
});

const searchInputt = document.getElementById('searchInput');
const peliculassContainer = document.querySelector('.peliculas_series');
const peliculass = Array.from(peliculasContainer.querySelectorAll('.containerti'));


searchInput.addEventListener('input', () => {
    const searchTerm = searchInputt.value.toLowerCase();

  
    peliculass.forEach(pelicula => {
        const title = pelicula.querySelector('.titulo2').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            pelicula.style.display = 'block';
        } else {
            pelicula.style.display = 'none';
        }
    });
});




