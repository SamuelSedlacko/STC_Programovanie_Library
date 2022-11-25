"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const addbook_1 = require("./endpoints/books/addbook");
const ShowLibraryEndpoint_1 = require("./endpoints/ShowLibraryEndpoint");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, body_parser_1.json)());
app.get('/', (req, res) => {
    res.send('Welcome to book library!\nIf you want to see your library, please go to /api/library/list.\n If you want to put a new book into your library, send a post request to /api/library/book/add');
});
app.post('/api/library/book/add', (req, res) => {
    (0, addbook_1.addBook)(req, res);
});
app.get('/api/library/list', (req, res) => {
    (0, ShowLibraryEndpoint_1.showLib)(req, res);
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
