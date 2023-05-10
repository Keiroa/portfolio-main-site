const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

const port = process.env.port || 3000

// Routing directory can be changed to any other file, such as about, contact, (line 17)
router.get('/', (req, res) => {
  // __dirname is equal to your project folder
  res.sendFile(path.join(__dirname+'/index.html'))
  res.send('This is a test - Kevin R')
})

app.use('/', router)
// Listen on port 3000
app.listen(port)

// For CLI view to confirm connection listening
console.log('KQED Frontend Application started at http://localhost:' + port)