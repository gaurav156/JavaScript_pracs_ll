const book = {
    name: "book 1",
    pageCount: 20,
    author: {
        firstName: "Gaurav",
        lastName: "Shukla",
    },
    pageColor: false,
    setPageColor: function (pageType){
        this.pageColor = pageType;
    }
};

//2 ways to access object properties:
//1 - dot operator :
console.log(book.name);
console.log(book.author.firstName);

//2 - [] operator : 
console.log(book["pageColor"]);

var var1 = "pageColor";
book[var1] = true;
console.log(book.pageColor);