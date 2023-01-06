"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logindata = exports.registrationfiles = exports.loadReg = void 0;
const fs_1 = __importDefault(require("fs"));
const tohash_1 = require("./booksoperations/tohash");
const loadReg = () => {
    const files = fs_1.default.readdirSync("users/");
    console.log(files);
    return [];
};
exports.loadReg = loadReg;
const registrationfiles = () => {
    const files = fs_1.default.readdirSync("users/");
    console.log(files);
    return [];
};
exports.registrationfiles = registrationfiles;
const logindata = (email, password) => {
    const hashedemail = (0, tohash_1.hashingmethod)(email);
    const hashedpassw = (0, tohash_1.hashingmethod)(password);
    const hashsaltpass = (0, tohash_1.hashingmethod)(hashedpassw + hashedemail);
    return [hashedemail, hashsaltpass];
};
exports.logindata = logindata;
