"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userregister = void 0;
const fs_1 = __importDefault(require("fs"));
const tohash_1 = require("./booksoperations/tohash");
if (!fs_1.default.existsSync("users")) {
    fs_1.default.mkdirSync("users");
}
const userregister = (req, res) => {
    const registerdata = req.body;
    function checkAtributes(registeratributes) {
        if ("name" in registeratributes && "surname" in registeratributes && "email" in registeratributes && "password" in registeratributes) {
            const emailaddress = registerdata.email;
            const hashedemailaddress = (0, tohash_1.hashingmethod)(emailaddress);
            const stringhem = hashedemailaddress.toString();
            const pass = registerdata.password;
            const hashedpass = (0, tohash_1.hashingmethod)(pass);
            const saltedpass = (0, tohash_1.hashingmethod)(hashedpass + hashedemailaddress);
            const registerIntoFolder = {
                name: registeratributes.name,
                surname: registeratributes.surname,
                email: emailaddress,
                password: saltedpass,
            };
            const jsonRIF = JSON.stringify(registerIntoFolder);
            if (!fs_1.default.existsSync("users/" + hashedemailaddress + ".json")) {
                fs_1.default.writeFileSync("users/" + hashedemailaddress + ".json", jsonRIF);
                res.send("You have been successfully registered!");
            }
            else {
                res.send("Sorry the user already exists!");
            }
        }
        else {
            res.send("Sorry, you are missing an argument, please check your registration and try again");
        }
    }
    checkAtributes(registerdata);
};
exports.userregister = userregister;
