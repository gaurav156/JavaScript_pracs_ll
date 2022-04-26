//Creating Object through Class constructor :

import Book from "./03_12_prac_Class.js"
const book2 = new Book(
    "book2",
    30,
    "Ganesh",
    "Jadhav",
    "BW",
);

console.log("03_12 - Object Constructor using Class");
console.log(book2.pageCount);
console.log(book2.author.lastName);
console.log(book2.author);
book2.setPageColor("RGB");
console.log(book2.pageColor);

//Creating Object through Object's Constructor function :

function BookObjectFn(
    name,
    pageCount,
    firstName,
    lastName,
    pageColor,
) {
    this.name = name;
    this.pageCount = pageCount;
    this.author = {
        firstName: firstName,
        lastName: lastName,
    };
    this.pageColor = pageColor;
    this.setPageColor = function (color) {
        this.pageColor = color;
    };
}

const book3 = new BookObjectFn(
    "book3",
    15,
    "Rushikesh",
    "Jagdale",
    "Red",
);

console.log("03_12 - Object creation using Object constructor function");
console.log(book3.pageCount);