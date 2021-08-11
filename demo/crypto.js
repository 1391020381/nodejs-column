const crypto = require('crypto');
const fs = require('fs')
const path = require('path')
console.log(__dirname)
const content = fs.readFileSync(path.join(__dirname, './test.txt'), { encoding: 'utf8' })
const hash = crypto.createHash('sha256')
let output
hash.update(content)
output = hash.digest('hex')
console.log(output)