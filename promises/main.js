
$.get('/randomWords')
    .then(function (word) {
        console.log(word)
        return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`})
    .the(function (book) {
        console.log(book)
    })

