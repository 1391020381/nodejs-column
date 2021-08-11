const http = require('http')
const server = http.createServer((serverReq, serverRes) => {
    let url = serverReq.url
    serverRes.setHeader("Content-Type", "application/json;charset=utf-8")
    serverRes.end('您访问的地址是:', url)
})

server.listen(3000, () => {
    console.log('server is listen http://loclhost:3000')
})

const client = http.get('http://localhost:3000', (clientRes) => {
    clientRes.pipe(process.stdout)
})