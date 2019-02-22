const express = require('express')
const app = express()


app.get('/', (req, res)=> {
       
     res.send("Yeh hone wala hai about page. jabarjast")
})











app.listen(process.env.PORT || 3000, ()=> {
       
      console.log("server runnning ")
})