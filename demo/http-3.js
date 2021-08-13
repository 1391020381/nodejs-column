const http = require('http')
const url = require('url')
const querystring = require('querystring')
const server = http.createServer((req, res) => {
    let body = ''
    console.log('1、客户端请求url:', req.url)
    console.log('2. http版本:', req.httpVersion)
    console.log('3.http请求方法:', req.method)
    console.log('4.http请求头部' + JSON.stringify(req.headers))
    req.on("data", (thunk) => {
        body += thunk
    })
    req.on('end', () => {
        console.log('post body is:', body)
        res.end('ok')
    })
})
server.listen(3000, () => {
    console.log('server is listening http://localhost:3000')
})