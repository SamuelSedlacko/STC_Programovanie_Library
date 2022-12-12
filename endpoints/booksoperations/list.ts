import { addedBook } from "./contents";
import fs from "fs"


const allTheBooks = fs.readdirSync("./books")

export const listOfBooks: Array<allTheBooks> = [] //premenna, ktora v sebe obsahuje databazu knih