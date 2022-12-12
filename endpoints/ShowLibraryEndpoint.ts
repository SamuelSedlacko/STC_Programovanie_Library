import { listOfBooks } from "./booksoperations/list"

export const showLib = (req: any, res: any) => { //endpoint, ako response vypise kniznicu
    res.send(listOfBooks)
}