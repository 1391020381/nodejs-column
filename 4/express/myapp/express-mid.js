const connect = require('express')
const app = connect()

app.use(function m1(req, res, next) {
    console.log('m1')
    next()
    console.log('m1 end')
})

app.use(function m2(req, res, next) {
    console.log('m2')
    next()
    console.log('m2 end')
})
app.use(function m3(req, res, next) {
    console.log('m3')
    res.end('m3 end')
})

app.listen(3000, () => {
    console.log(`server is listening 3000`)
})

app.use(function middleware1(req, res, next) {
    console.log('middleware1 开始')
        // next()
        (function (req, res, next) {
            console.log('middleware2 开始')
                // next()
                (function (req, res, next) {
                    console.log('middleware3 开始')
                        // next()
                        (function handler(req, res, next) {
                            res.send("end")
                            console.log('123456')
                        })()
                    console.log('middleware3 结束')
                })()
            console.log('middleware2 结束')
        })()
    console.log('middleware1 结束')
})