const url = require('url')
const str = '//foo/bar'
let obj = url.parse(str, true, false)
console.log(obj)
obj = url.parse(str, true, true)
console.log(obj)