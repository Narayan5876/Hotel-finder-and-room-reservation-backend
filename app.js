const express = require('express')
require('./database/mongoose')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
const userrouter = require('./router/user')
const productrouter = require('./router/product')





app.use(express.json())
app.use(userrouter)
app.use(productrouter)
//app.use(taskrouter)
app.listen(3000);
//this is our port