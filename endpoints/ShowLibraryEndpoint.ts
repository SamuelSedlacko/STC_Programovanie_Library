import { listOfBooks } from "./booksoperations/list"

export const showLib = (req: any, res: any) => { 
    res.send(listOfBooks)
}