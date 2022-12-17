"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadBooklist = void 0;
const fs_1 = __importDefault(require("fs"));
const loadBooklist = () => {
    const files = fs_1.default.readdirSync("books/");
    console.log(files);
    const booksInFiles = files.map((bookFN) => {
        const raw = fs_1.default.readFileSync("books/" + bookFN);
        const bookData = JSON.parse(raw.toString());
        console.log(bookData);
        return bookData;
    });
    return booksInFiles;
};
exports.loadBooklist = loadBooklist;
