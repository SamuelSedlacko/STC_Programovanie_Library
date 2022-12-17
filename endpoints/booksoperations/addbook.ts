import { fstat } from "fs"
import { addedBook } from "./contents"
import { listOfBooks } from "./list"
import fs from "fs"
import { hashingmethod } from "./tohash"

export const addBook = (req: any, res: any) => { //funkcia, ktora prida knihu do databazy
   const parameters = req.body

   function checkAtributes(bookAttributes: addedBook) {//funkcia, ktora overi, ci vsetky parametre knihy boli zadane, ak ano, kniha bude pushnuta do databazy, ak nie, upozorni, aby uzivatel skontroloval input
      if("name" in bookAttributes && "author" in bookAttributes && "genre" in bookAttributes && "yearOfPublish" in bookAttributes && "publisher" in bookAttributes && "countryOfPublish" in bookAttributes && "numberOfPages" in bookAttributes) {
         listOfBooks.push(parameters)

         console.log(listOfBooks)

         res.sendStatus(200)

         const bookJSONstr = JSON.stringify(parameters)

         const hashedBookName = hashingmethod(parameters.name.toLowerCase().replace(" ", "") + parameters.author.toLowerCase().replace(" ", "") + parameters.genre.toLowerCase().replace(" ", "") + parameters.publisher.toLowerCase().replace(" ", ""))

         if(!fs.existsSync("books")) {
            fs.mkdirSync("books");
         }

         fs.writeFileSync("books/" + hashedBookName + ".json" ,bookJSONstr)
         
      }
      else{
         console.log("The input does not contain required parameters, please check your input and try again.")
         res.send("The input does not contain required parameters, please check your input and try again.")
      }
   }
   checkAtributes(parameters) //zavolanie funkcie



}