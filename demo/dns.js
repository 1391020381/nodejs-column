const dns = require('dns')
dns.lookup('www.baidu.com', (err, address, family) => {
    console.log('address:%j family:IPv%v', address, family)
})