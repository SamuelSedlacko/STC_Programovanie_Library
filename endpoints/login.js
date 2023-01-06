"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginfunction = void 0;
const loadregistrations_1 = require("./loadregistrations");
const fs_1 = __importDefault(require("fs"));
const uuid_1 = require("uuid");
const list_1 = require("./booksoperations/list");
const loginfunction = (req, res) => {
    const login = req.body;
    const [hashedemail, hashedpassw] = (0, loadregistrations_1.logindata)(login.email, login.password);
    if (!fs_1.default.existsSync("users")) {
        fs_1.default.mkdirSync("users");
    }
    if (fs_1.default.existsSync("users/" + hashedemail + ".json")) {
        const raw = fs_1.default.readFileSync("users/" + hashedemail + ".json");
        const register = JSON.parse(raw.toString());
        if (register.password === hashedpassw) {
            const key = (0, uuid_1.v4)();
            res.json({ key: key });
            list_1.akeys.push(key);
        }
        else {
            res.send("Login Failed! Please check your credentials and try again!");
        }
    }
};
exports.loginfunction = loginfunction;
