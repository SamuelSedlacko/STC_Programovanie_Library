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
    function checkAtributes(bookAttributes) {
        if ("name" in bookAttributes && "author" in bookAttributes && "genre" in bookAttributes && "yearOfPublish" in bookAttributes && "publisher" in bookAttributes && "countryOfPublish" in bookAttributes && "numberOfPages" in bookAttributes) {
            list_1.listOfBooks.push(parameters);
            console.log(list_1.listOfBooks);
            res.sendStatus(200);
            const bookJSONstr = JSON.stringify(parameters);
            const hashedBookName = (0, tohash_1.bookHash)(parameters.name.toLowerCase().replace(" ", "") + parameters.author.toLowerCase().replace(" ", "") + parameters.genre.toLowerCase().replace(" ", "") + parameters.publisher.toLowerCase().replace(" ", ""));
            if (!fs_1.default.existsSync("books")) {
                fs_1.default.mkdirSync("books");
            }
            fs_1.default.writeFileSync("books/" + hashedBookName + ".json", bookJSONstr);
        }
        else {
            console.log("The input does not contain required parameters, please check your input and try again.");
            res.send("The input does not contain required parameters, please check your input and try again.");
        }
    }
    checkAtributes(parameters); //zavolanie funkcie
};
exports.addBook = addBook;
