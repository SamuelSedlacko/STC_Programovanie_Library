import { fstat } from "fs"
import { addedBook, authKey } from "./contents"
import { akeys, listOfBooks } from "./list"
import fs from "fs"
import { hashingmethod } from "./tohash"

export const addBook = (req: any, res: any) => { 
   const parameters = req.body
   const authkey: authKey = parameters
   function checkAtributes(bookAttributes: addedBook) {
      if("name" in bookAttributes && "author" in bookAttributes && "genre" in bookAttributes && "yearOfPublish" in bookAttributes && "publisher" in bookAttributes && "countryOfPublish" in bookAttributes && "numberOfPages" in bookAttributes && "description" in bookAttributes) {
         listOfBooks.push(authkey.book)

         console.log(listOfBooks)


         const bookJSONstr = JSON.stringify(authkey.book)

         const hashedBookName = hashingmethod(authkey.book.name.toLowerCase().replace(" ", "") + authkey.book.author.toLowerCase().replace(" ", "") + authkey.book.genre.toLowerCase().replace(" ", "") + authkey.book.publisher.toLowerCase().replace(" ", ""))

         if(!fs.existsSync("books")) {
            fs.mkdirSync("books");
         }
         if(!fs.existsSync("books/" + hashedBookName + ".json")){
            fs.writeFileSync("books/" + hashedBookName + ".json" , bookJSONstr)
            res.send("The book was successfully added into the library!")
         }
         else{
            res.send("The book already exists!")
         }

         
      }
      else{
         console.log("The input does not contain required parameters, please check your input and try again.")
         res.send("The input does not contain required parameters, please check your input and try again.")
      }
   }
   if(akeys.includes(authkey.key)){
      checkAtributes(authkey.book)
   }
   else{
      res.send("Sorry, invalid key! Try again!")
   }



}