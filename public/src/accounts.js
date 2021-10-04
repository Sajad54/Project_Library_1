function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last ? 1 : -1));
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const numBorrowed = books.reduce((acc, book) => {
    let borrowedList = book.borrows;
    borrowedList.forEach((borrow) => {
      let borrowedID = borrow.id;
      let accountID = account.id;
      if(borrowedID === accountID){
        acc++;
      }

    });
    return acc;
  },0);
  return numBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  let accountID = account.id;
  let checkouts = books.filter((book) => book.borrows[0].id === accountID);
  for (let i = 0; i < checkouts.length; i++) {
    checkouts[i].author = authors.find(
      (author) => checkouts[i].authorId === author.id
    );
  }
  return checkouts;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
