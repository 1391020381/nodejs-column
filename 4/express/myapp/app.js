const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
/**
 * 中间件 1
 */
app.use((req, res, next) => {
    console.log('first');
    next();
    console.log('first end');
});
/**
 * 中间件 2
 */
app.use((req, res, next) => {
    console.log('second');
    next();
    console.log('second end');
});
/**
 * 中间件 3
 */
app.use((req, res, next) => {
    console.log('third');
    next();
    console.log('third end');
});

app.get('/', (req, res, next) => {
    if (req.url === '/favicon.ico') return;
    const total = 1;
    if (total > 0) {
        res.status(200).send({ status: 0, message: "1" })
    }
    res.status(503).send({ status: 1, message: "503" });
    next()
})

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(err.status || 500);
    res.send({
        status: 0,
        message: err.message,
        error: err,
        statck: err.stack
    });
});

process.on('uncaughtException', (err) => {
    console.log('uncaughtException:', err.message, err.stack);
    process.exit(1);
});