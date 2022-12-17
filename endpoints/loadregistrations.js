"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationfiles = exports.loadReg = void 0;
const fs_1 = __importDefault(require("fs"));
const list_1 = require("./booksoperations/list");
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
const registrationfiles1 = exports.registrationfiles.toString();
list_1.registrations.push(...registrationfiles1);
