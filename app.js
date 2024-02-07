const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080;
const connectDb = require('./connect/connect')
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});



const startServer = async () =>{
  try {
    await connectDb();
    app.listen(port, () => {
      console.log(`App running on port ${port}.`)
    })
  } catch (error) {
    console.log(`error is ${error}`)
  }
}

startServer()