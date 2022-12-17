export type addedBook = { //parametre knihy
    name: string,
    author: string,
    genre: string,
    yearOfPublish: number,
    publisher: string,
    countryOfPublish: string,
    numberOfPages: number,
}

export type registerType = {
    name: string,
    surname: string,
    email: string,
    password: string,
}

export type loginType = {
    email: string,
    password: string,
}
