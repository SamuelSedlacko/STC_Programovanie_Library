import { listOfBooks } from "./books/list"

export const showLib = (req: any, res: any) => {
    res.send(listOfBooks)
}