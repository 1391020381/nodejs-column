const fs = require('fs')
const path = require('path')
const dirPath = path.resolve(path.join(__dirname, '../'))
console.log(path.resolve(dirPath))
const files = fs.readdirSync(dirPath, 'utf-8')
console.log(files)
const getFilesInDir = function (dir) {
    let results = [path.resolve(dir)]
    const files = fs.readdirSync(dir, 'utf-8')
    files.forEach(file => {
        file = path.resolve(dir, file)
        const stats = fs.statSync(file)
        if (stats.isFile()) {
            results.push(file)
        } else if (stats.isDirectory()) {
            results = results.concat(getFilesInDir(file))
        }
    })
    return results
}
let dirFiles = getFilesInDir(dirPath)
console.log(dirFiles)