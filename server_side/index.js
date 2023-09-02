const express = require('express')
const compoundRouter = require('./src/routes/routes')
// const { PORT } = require('./config')
const cors = require('cors')

const app = express()

app.use(cors())

//middleware
app.use(express.json())
app.use('', compoundRouter)


const PORT = process.env.PORT || 3000;

// app.get('/',(req,res)=>{
//     res.json({message:'hello from api'})
// })

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server running successfullyat port ${PORT}`)
  } else {
    console.log('Error occurred! Server failed to run')
  }
})
