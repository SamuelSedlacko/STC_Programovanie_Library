"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = void 0;
const list_1 = require("./list");
const fs_1 = __importDefault(require("fs"));
const tohash_1 = require("./tohash");
const addBook = (req, res) => {
    const parameters = req.body;
    const authkey = parameters;
    function checkAtributes(bookAttributes) {
        if ("name" in bookAttributes && "author" in bookAttributes && "genre" in bookAttributes && "yearOfPublish" in bookAttributes && "publisher" in bookAttributes && "countryOfPublish" in bookAttributes && "numberOfPages" in bookAttributes && "description" in bookAttributes) {
            list_1.listOfBooks.push(authkey.book);
            console.log(list_1.listOfBooks);
            const bookJSONstr = JSON.stringify(authkey.book);
            const hashedBookName = (0, tohash_1.hashingmethod)(authkey.book.name.toLowerCase().replace(" ", "") + authkey.book.author.toLowerCase().replace(" ", "") + authkey.book.genre.toLowerCase().replace(" ", "") + authkey.book.publisher.toLowerCase().replace(" ", ""));
            if (!fs_1.default.existsSync("books")) {
                fs_1.default.mkdirSync("books");
            }
            if (!fs_1.default.existsSync("books/" + hashedBookName + ".json")) {
                fs_1.default.writeFileSync("books/" + hashedBookName + ".json", bookJSONstr);
                res.send("The book was successfully added into the library!");
            }
            else {
                res.send("The book already exists!");
            }
        }
        else {
            console.log("The input does not contain required parameters, please check your input and try again.");
            res.send("The input does not contain required parameters, please check your input and try again.");
        }
    }
    if (list_1.akeys.includes(authkey.key)) {
        checkAtributes(authkey.book);
    }
    else {
        res.send("Sorry, invalid key! Try again!");
    }
};
exports.addBook = addBook;
