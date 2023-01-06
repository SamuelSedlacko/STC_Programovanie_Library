import bodyParser, { json } from "body-parser"
import express from "express"
import { addBook } from "./endpoints/booksoperations/addbook"
import { addedBook, registerType } from "./endpoints/booksoperations/contents"
import { listOfBooks} from "./endpoints/booksoperations/list"
import { loadBooklist } from "./endpoints/booksoperations/loadBooks"
import { showLib } from "./endpoints/ShowLibraryEndpoint"
import { userregister } from "./endpoints/register"
import { loadReg } from "./endpoints/loadregistrations"
import { loginfunction } from "./endpoints/login"
import { searchFunction } from "./search/searchendpoint"
const app = express()
const port = 3000

app.use(json())


const loadAllMyBooks: addedBook[] = loadBooklist()

listOfBooks.push(...loadAllMyBooks)

app.get('/', (req, res) => { // get metoda, privita pouzivatela
  res.send('Welcome to book library!\nIf you want to see your library, please go to /api/library/list.\n If you want to put a new book into your library, send a post request to /api/library/book/add')
})

app.post('/api/library/book/add', (req, res) => { //post metoda, pridava knihy do kniznice pomocou endpointu addBook
  addBook(req, res)
})

app.post('/api/auth/register', (req, res) => { //post metoda, registracia uzivatela
  userregister(req, res)
})

app.get('/api/library/list', (req, res) => { //get metoda, vypise kniznicu knih, ktore boli pridane, pomocou endpointu showlibraryendpoint
  showLib(req, res)
})

app.get('/api/library/filter', (req, res) => {
  searchFunction(req, res)
})

app.post('/api/auth/login', (req, res) => { //post metoda, registracia uzivatela
  loginfunction(req, res)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})