// Una función asíncrona para simular la obtención de datos de una API
async function obtenerBiblioteca() {
    // Simula un retraso para la llamada asíncrona
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { title: "The Great Gatsby", year: 1925, isbn: "978-0743273565", author: "F. Scott Fitzgerald" },
                { title: "To Kill a Mockingbird", year: 1960, isbn: "978-0060935467", author: "Harper Lee" },
                { title: "1984", year: 1949, isbn: "978-0451524935", author: "George Orwell" },
                { title: "The Catcher in the Rye", year: 1951, isbn: "978-0316769488", author: "J.D. Salinger" },
                { title: "Moby-Dick", year: 1851, isbn: "978-1503280786", author: "Herman Melville" }
            ]);
        }, 1000); // Retraso de 1 segundo
    });
}

async function mostrarLibros() {
    let bookList = document.getElementById('booksTable');
    let tableContent = ``;
    
    try {
        // Espera a que la promesa se resuelva y obtén los datos
        let library = await obtenerBiblioteca();
        
        // Itera sobre los datos obtenidos y genera el contenido de la tabla
        for (const item of library) {
            tableContent += `
                <tr>
                    <td>${item.title}</td>
                    <td>${item.year}</td>
                    <td>${item.isbn}</td>
                    <td>${item.author}</td>
                </tr>`;
        }
        
        // Inserta el contenido en la tabla
        bookList.innerHTML += tableContent;
    } catch (error) {
        console.error('Error al obtener la biblioteca:', error);
    }
}

// Llama a la función para mostrar los libros
mostrarLibros();