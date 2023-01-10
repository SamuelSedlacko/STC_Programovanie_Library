"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchFunction = void 0;
const list_1 = require("../endpoints/booksoperations/list");
const searchFunction = (req, res) => {
    const queryPar = req.query;
    const querySearch = queryPar;
    console.log(queryPar);
    if (querySearch.type === "author") {
        const result = byAuthor(querySearch.query);
        res.json(result);
    }
    else if (querySearch.type === "name") {
        const result = byName(querySearch.query);
        res.json(result);
    }
    else if (querySearch.type === "desc") {
        const result = byDescription(querySearch.query);
        res.json(result);
    }
    res.sendStatus(400);
};
exports.searchFunction = searchFunction;
const byAuthor = (query) => {
    const lowerCase = query.toLowerCase();
    let results = [];
    for (let addedBook of list_1.listOfBooks) {
        if (addedBook.author.toLowerCase().includes(lowerCase)) {
            results.push(addedBook);
        }
    }
    results.length = 5;
    return results;
};
const byName = (query) => {
    const lowerCase = query.toLowerCase();
    let results = [];
    for (let addedBook of list_1.listOfBooks) {
        if (addedBook.name.toLowerCase().includes(lowerCase)) {
            results.push(addedBook);
        }
    }
    results.length = 5;
    return results;
};
const byDescription = (query) => {
    const lowerCase = query.toLowerCase();
    const qArray = lowerCase.split(" ");
    let results = [];
    for (let addedBook of list_1.listOfBooks) {
        let score = 0;
        let descp = addedBook.description.toLowerCase();
        for (let qElem of qArray) {
            if (descp.includes(qElem)) {
                score += 1;
            }
        }
        if (score > 0) {
            results.push([addedBook, score]);
        }
    }
    let sortedResult = results.sort((val1, val2) => {
        return val2[1] - val1[1];
    }).map((value) => value[0]);
    sortedResult.length = 5;
    return sortedResult;
};
