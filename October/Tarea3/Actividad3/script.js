function TheLibrary(){
  return new Promise((arrayOfBooks) => {
  setTimeout(() => {
    arrayOfBooks([
        { title: "The Great Gatsby", year: 1925, isbn: "978-0743273565", author: "F. Scott Fitzgerald" },
        { title: "To Kill a Mockingbird", year: 1960, isbn: "978-0060935467", author: "Harper Lee" },
        { title: "1984", year: 1949, isbn: "978-0451524935", author: "George Orwell" },
        { title: "The Catcher in the Rye", year: 1951, isbn: "978-0316769488", author: "J.D. Salinger" },
        { title: "Moby-Dick", year: 1851, isbn: "978-1503280786", author: "Herman Melville" }
      ]);
    }, 2000);
  });
}

TheLibrary().then((arrayOfBooksValues) => {
  let bookList = document.getElementById('booksTable');
  let tableContent = ``;
  for (const item of arrayOfBooksValues) {
    tableContent += `
    <tr>
      <td>${item.title}</td>
      <td>${item.year}</td>
      <td>${item.isbn}</td>
      <td>${item.author}</td>
    </td>`
}
  bookList.innerHTML += tableContent;
}).catch((error) => {
  console.error('Error when u try to fetch the books :(', error);
});