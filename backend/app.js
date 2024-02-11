const express = require("express")

const app = express()


app.use(express.urlencoded({extended : false}))     




const PORT = 7070;
app.listen( PORT , () => {
    console.log("서버 열림🙌🙌🙌")
} )