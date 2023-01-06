import { query } from "express"
import { addBook } from "../endpoints/booksoperations/addbook"
import { addedBook, searchT } from "../endpoints/booksoperations/contents"
import { listOfBooks } from "../endpoints/booksoperations/list"

export const searchFunction = (req: any, res: any) => {
    const queryPar = req.query

    const querySearch: searchT = queryPar

    console.log(queryPar)

    if(querySearch.type === "author"){
        const result = byAuthor(querySearch.query)

        res.json(result)
    }
    else if(querySearch.type === "name"){
        const result = byName(querySearch.query)

        res.json(result)
    }
    else if(querySearch.type === "desc"){
        const result = byDescription(querySearch.query)

        res.json(result)
    }

    res.sendStatus(400)
}

const byAuthor = (query: string): addedBook[] => {
    const lowerCase = query.toLowerCase()

    let results = []

    for(let addedBook of listOfBooks){
        if(addedBook.author.toLowerCase().includes(lowerCase)) {
            results.push(addedBook)
        }
    }
    return results
}

const byName = (query: string): addedBook[] => {
    const lowerCase = query.toLowerCase()

    let results = []

    for(let addedBook of listOfBooks){
        if(addedBook.name.toLowerCase().includes(lowerCase)) {
            results.push(addedBook)
        }
    }
    return results
}

const byDescription = (query: string) => {
    const lowerCase = query.toLowerCase()

    const qArray: string[] = lowerCase.split(" ")

    let results: [addedBook, number] [] = []
    for(let addedBook of listOfBooks){
        
        let score = 0
        let descp = addedBook.description.toLowerCase()

        for(let qElem of qArray){
            if(descp.includes(qElem)){
                score += 1
            }
        }
        if(score > 0){
            results.push([addedBook, score])
        }
    }

    let sortedResult = results.sort((val1: [addedBook, number], val2: [addedBook, number]) => {
        return val2[1] - val1[1]
    }).map((value: [addedBook, number]) => value[0])
    sortedResult.length = 5
    return sortedResult
}
