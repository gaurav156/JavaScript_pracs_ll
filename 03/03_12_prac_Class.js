//2 ways to declare a class :

// 1 :
// const Book = class {

// }

// 2 :
class Book {
    constructor(
        name,
        pageCount,
        firstName,
        lastName,
        pageColor,
    ) {
        this.name = name;
        this.pageCount = pageCount;
        this.author = {
            firstName : firstName,
            lastName : lastName,
        };
        this.pageColor = pageColor;
    }
    setPageColor(pageColor) {
        this.pageColor = pageColor;
    }
}

export default Book;