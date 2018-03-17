const  express = require('express')
const  app = express()
require('./tools/server')
app.use(express.static('public'))

// 使路由生效
app.use(require('./routers/router'))
app.listen(3000)