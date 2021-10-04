function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let arr1 = books.filter((book) => book.borrows[0].returned === false);
  let arr2 = books.filter((book) => book.borrows[0].returned === true);
  return [arr1,arr2];
  
}

function getBorrowersForBook(book, accounts) {
  let borrows = [];
  let bookBorrow = book.borrows;
  bookBorrow.forEach((newBook) => {
    let user = accounts.find((user) => user.id === newBook.id);
    let borrowObject = { ...newBook, ...user };
    borrows.push(borrowObject);
  
  });
    
  return borrows.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
