// 监听/test接口，并延时返回

const app = require('express')();

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
    )
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    if (req.method === 'OPTIONS') res.sendStatus(200) /*让options请求快速返回*/
    else next()
})

app.all('/test', (req, res) => {
    console.log('--->', req.query.timeout)
    setTimeout(() => {
        res.send(req.query)
    }, parseFloat(req.query.timeout))
})

app.listen(9000, () => {
    console.log('\nlisten at: ', `http://127.0.0.1:${9000}`)
})