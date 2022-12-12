"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showLib = void 0;
const list_1 = require("./booksoperations/list");
const showLib = (req, res) => {
    res.send(list_1.listOfBooks);
};
exports.showLib = showLib;
