import crypto from "crypto-js"

let message = 'i am secret message'

console.log('Encrypted')
const encMessage = crypto.AES.encrypt(message, 'supersecret')
console.log(encMessage.toString())
console.log(crypto.AES.decrypt(encMessage, 'supersecret').toString(crypto.enc.Utf8))
