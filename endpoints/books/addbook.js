"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = void 0;
const list_1 = require("./list");
const addBook = (req, res) => {
    const parameters = req.body;
    function checkAtributes(bookAttributes) {
        if ("name" in bookAttributes && "author" in bookAttributes && "genre" in bookAttributes && "yearOfPublish" in bookAttributes && "publisher" in bookAttributes && "countryOfPublish" in bookAttributes && "numberOfPages" in bookAttributes) {
            list_1.listOfBooks.push(parameters);
            console.log(list_1.listOfBooks);
            res.sendStatus(200);
        }
        else {
            console.log("The input does not contain required parameters, please check your input and try again.");
            res.send("The input does not contain required parameters, please check your input and try again.");
        }
    }
    checkAtributes(parameters);
};
exports.addBook = addBook;
