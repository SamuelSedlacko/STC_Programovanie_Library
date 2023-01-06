import { fstat } from "fs"
import { loginType, registerType } from "./booksoperations/contents"
import { logindata } from "./loadregistrations"
import fs from "fs" 
import uuidv4, { v4 } from "uuid"
import { akeys } from "./booksoperations/list"

export const loginfunction = (req: any, res:any) => {
    const login: loginType = req.body

    const [hashedemail, hashedpassw] = logindata(login.email, login.password)

    if (!fs.existsSync("users")){
        fs.mkdirSync("users");
    }

    if (fs.existsSync("users/" + hashedemail + ".json")){
        const raw = fs.readFileSync("users/" + hashedemail + ".json")
        const register: registerType = JSON.parse(raw.toString())

        if (register.password === hashedpassw){
            const key = v4()
            res.json({key:key})
            akeys.push(key)
        }
        else{
            res.send("Login Failed! Please check your credentials and try again!")
        }
    }
}