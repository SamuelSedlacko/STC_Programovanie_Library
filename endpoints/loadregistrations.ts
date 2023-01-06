import fs from "fs"
import { registerType } from "./booksoperations/contents"
import { hashingmethod } from "./booksoperations/tohash"


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

export const logindata = (email: string, password: string): [string, string] => {
    const hashedemail = hashingmethod(email)
    const hashedpassw = hashingmethod(password)
    const hashsaltpass = hashingmethod(hashedpassw + hashedemail)
    return [hashedemail, hashsaltpass]
}
