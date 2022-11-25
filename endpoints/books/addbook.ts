import { addedBook } from "./contents"
import { listOfBooks } from "./list"

export const addBook = (req: any, res: any) => { //funkcia, ktora prida knihu do databazy
   const parameters = req.body

   function checkAtributes(bookAttributes: addedBook) {//funkcia, ktora overi, ci vsetky parametre knihy boli zadane, ak ano, kniha bude pushnuta do databazy, ak nie, upozorni, aby uzivatel skontroloval input
      if("name" in bookAttributes && "author" in bookAttributes && "genre" in bookAttributes && "yearOfPublish" in bookAttributes && "publisher" in bookAttributes && "countryOfPublish" in bookAttributes && "numberOfPages" in bookAttributes) {
         listOfBooks.push(parameters)
         console.log(listOfBooks)
         res.sendStatus(200)
      }
      else{
         console.log("The input does not contain required parameters, please check your input and try again.")
         res.send("The input does not contain required parameters, please check your input and try again.")
      }
   }
   checkAtributes(parameters) //zavolanie funkcie
}