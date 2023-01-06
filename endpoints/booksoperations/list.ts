import { addedBook, registerType } from "./contents";
import fs from "fs"
import { loadBooklist } from "./loadBooks";



export const listOfBooks: Array<addedBook>  = [] //premenna, ktora v sebe obsahuje databazu knih

export const akeys: Array<string> = []
