const fs = require('fs')
const path = require('path')
const file = 'test.txt'
const filePath = path.join(__dirname, file)

// fs.appendFile(filePath, ' 行云流水', 'utf8', err => {
//     if (err) {
//         throw err
//     }
//     console.log('The "data to append " was append to file!')
// })

// function closeFd(fd) {
//     fs.close(fd, err => {
//         if (err) throw err
//     })
// }

// fs.open(filePath, 'a', (err, fd) => {
//     if (err) throw err
//     try {
//         fs.appendFile(fd, ' data to appendxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 'utf8', err => {
//             closeFd(fd)
//             if (err) throw err
//         })
//     } catch (err) {
//         closeFd(fd)
//         throw err
//     }
// })

function callback(err) {
    if (err) throw err
    console.log('source.txt was copied to destination.txt')
}

fs.copyFile(filePath, path.join(__dirname, 'aaa.txt'), callback)

fs.copyFile(filePath, path.join(__dirname, 'bbb.txt'), fs.constants.COPYFILE_EXCL, callback)