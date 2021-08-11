const fs = require('fs')
const path = require('path')
const file = 'aaa.txt'
const filePath = path.join(__dirname, file)
const readStream = fs.createReadStream(filePath, 'utf8')
const writeStream = fs.createWriteStream(filePath)
// readStream
//     .on('data', function (chunk) {
//         console.log('读取数据:', chunk)
//     })
//     .on('error', err => {
//         console.log('出错:', err.message)
//     })
//     .on('end', () => {
//         console.log('没有数据了')
//     })
//     .on('close', () => {
//         console.log('已经关闭')
//     })

writeStream
    .on('close', () => {
        console.log('写入关闭')
    })

writeStream.write('hello')
writeStream.write('world----------------------------------------------------------------')
writeStream.end('')