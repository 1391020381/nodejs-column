const { access, constants } = require('fs')
const path = require('path')
const file = 'package.json';
const filePath = path.join(__dirname, file)
access(filePath, constants.F_OK, err => {
    console.log(`${file} ${err ? 'does not esist' : 'exist'}`)
})
access(filePath, constants.R_OK, err => {
    console.log(`${file} ${err ? 'is not readable' : 'is readable'}`)
})

access(filePath, constants.W_OK, err => {
    console.log(`${file}${err ? 'is not writable' : 'is writable'}`)
})

access(filePath, constants.F_OK | constants.W_OK, err => {
    if (err) {
        console.error(`${file}${err.code === 'ENNENT' ? 'does not exist' : 'is read-only'}`)
    } else {
        console.log(`${file} exists,and it is writable`)
    }
})
