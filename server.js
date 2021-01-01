const express=require('express')
const app=express()
const PORT=process.env.PORT || 6000


app.use(express.json())
app.use(require('./routes/route'))

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

module.exports = app;
