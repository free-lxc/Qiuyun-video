const data = {
    name: 'lx',
    list: [

    ]
}
const history = require('connect-history-api-fallback');
//使用
const express = require("express")
const app = express()
app.use(history());
app.get('/index', function (req, res) {
    console.log(data)
    res.send(123)
})

app.listen(4000, () => {
    console.log("服务器启动成功了！！！")
})
