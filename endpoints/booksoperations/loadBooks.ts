import fs from "fs"
import { addedBook } from "./contents"
import { listOfBooks } from "./list"

export const loadBooklist = (): addedBook[] => {
    const files: string[] = fs.readdirSync("books/")
    console.log(files)
    const booksInFiles: addedBook[] = files.map((bookFN: string) => {
        const raw = fs.readFileSync("books/" + bookFN)
        const bookData: addedBook = JSON.parse(raw.toString())
        console.log(bookData)
        return bookData
    })
    return booksInFiles
}