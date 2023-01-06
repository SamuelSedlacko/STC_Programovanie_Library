import {registerType } from "./booksoperations/contents";
import fs from "fs"
import { hashingmethod } from "./booksoperations/tohash";
import { loadReg } from "./loadregistrations";


if(!fs.existsSync("users")) {
    fs.mkdirSync("users");
}

export const userregister = (req: any, res: any) => {
    const registerdata: registerType = req.body
    function checkAtributes(registeratributes: registerType){
        if("name" in registeratributes && "surname" in registeratributes && "email" in registeratributes && "password" in registeratributes){
            const emailaddress = registerdata.email
            const hashedemailaddress = hashingmethod(emailaddress)
            const stringhem = hashedemailaddress.toString()

            const pass = registerdata.password
            const hashedpass = hashingmethod(pass)
            const saltedpass = hashingmethod(hashedpass + hashedemailaddress)

            const registerIntoFolder: registerType = {
                name: registeratributes.name,
                surname: registeratributes.surname,
                email: emailaddress,
                password: saltedpass,
                
            }

            
            const jsonRIF = JSON.stringify(registerIntoFolder)

            if(!fs.existsSync("users/" + hashedemailaddress + ".json")){
                fs.writeFileSync("users/" + hashedemailaddress + ".json", jsonRIF)
                res.send("You have been successfully registered!")
            }
            else{
                res.send("Sorry the user already exists!")
            }


        }
        else{
            res.send("Sorry, you are missing an argument, please check your registration and try again")
        }
    }
    checkAtributes(registerdata)
}

