const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.headers)
    res.end('ok')
})
server.listen(3000)


http.get('http://127.0.0.1:3000', res => {
    console.log(res.statusCode)
})