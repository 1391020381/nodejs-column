const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'bbb.txt')
const destFile = path.join(__dirname, './ccc.txt')
fs.rename(filePath, destFile, err => {
    if (err) throw err
    console.log('重命名成功')
    fs.appendFile(destFile, '行云流水justdoit', 'utf-8', () => {
        if (err) throw err
        console.log('append成功')
    })
})