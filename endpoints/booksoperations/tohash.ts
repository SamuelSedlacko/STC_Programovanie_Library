import crypto from "crypto-js"
import Base64 from "crypto-js/enc-base64"

export const hashingmethod = (value:string) : string => {
    let theValue = Base64.stringify(crypto.SHA256(value))
    theValue = theValue.replace("/", "").replace(/\\/, "")
    return theValue
}
