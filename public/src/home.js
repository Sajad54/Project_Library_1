function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowed = 0;
  for (let borrows in books){
    if(!books[borrows].borrows[0].returned){
      borrowed++;
    }
  }
  return borrowed;
}
function _sortObjectByValues(obj) {
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyB] > obj[keyA]) {
      return 1;
    }
    return 0;
  });
}

function getTitleCount(books, title){
  let count = 0;
  for(let i = 0; i < books.length; i++) {
    if(books[i].title === title){
      books[i].borrows.forEach((borrow) => {
        count++;
      })
    }
  }
  return count;
}

function getAuthorCount(books, authorId){
  let count = 0;
  for(let i = 0; i < books.length; i++) {
    if(books[i].authorId === authorId){
      books[i].borrows.forEach((borrow) => {
        count++;
      })
      
    }
  }
  return count;
}
function getMostCommonGenres(books) {
  let countObj = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {});
  let sortedKeys = _sortObjectByValues(countObj);
  let sorted = sortedKeys
    .map((key) => ({ name: key, count: countObj[key] }))
    .slice(0, 5);
  return sorted;
}

function getMostPopularBooks(books) {
  let title = [];
  let commonTitles = [];
  for(let i = 0; i < books.length; i++) {
    let book = books[i];
    if(!title.includes(book.title)){
      title.push(book.title);
    }
  }
  title.forEach((title) => {
    commonTitles.push({"name":title,"count": getTitleCount(books,title)});
  })
  commonTitles.sort((titleA, titleB) => titleA.count > titleB.count ? -1 : 1);

  return commonTitles.splice(0,5)
}

function getMostPopularAuthors(books, authors) {
  let commonAuthor = [];
  authors.forEach((author) => {
    commonAuthor.push({"name":author.name.first + " " + author.name.last,"count": getAuthorCount(books,author.id)});
  })
  commonAuthor.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1);
  console.log(commonAuthor);
  console.log(authors);
  console.log(books);
  
  return commonAuthor.splice(0,5)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
