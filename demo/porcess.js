const { argv } = require('process')
const process = require('process')
process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code:', code)
})

process.on('exit', (code) => {
    console.log('Process exit event width code:', code)
})
console.log('This message is displayed first')
process.on('multipleResolves', (type, promise, reason) => {
    console.log(type, promise, reason)
    setImmediate(() => {
        console.log('multipleResolves---------------')
        process.exit(1)
    })
})

async function main() {
    try {
        return await new Promise((resolve, reject) => {
            resolve('First call')
            resolve('Swallowed resolved')
            reject(new Error('Swallowed reject'))
        })
    } catch {
        throw new Error('Failed')
    }
}
console.log(`This processor architecture is ${process.arch}`)
console.log(`process.argv---------${process.argv}`)
argv.forEach((val, index) => {
    console.log(`${index}:${val}`)
})
console.log('process.cwd:', process.cwd())
console.log('process.env:', process.env)
process.env.foo = 'bar'
console.log('process.env.foo:', process.env.foo)
main().then(console.log)