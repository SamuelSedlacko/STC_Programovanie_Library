import fs from "fs"
import { registerType } from "./booksoperations/contents"
import { registrations } from "./booksoperations/list"

export const loadReg = (): registerType[] => {
    const files: string[] = fs.readdirSync("users/")
    console.log(files)
    return []
}

export const registrationfiles = (): string[] => {
    const files: string[] = fs.readdirSync("users/")
    console.log(files)
    return []
}
