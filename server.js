
const express = require('express')
const common = require('./app/common')
const app = express()
const port = 3000

const controller1 = require('./app/controller1') //part 1 implementation
const controller2 = require('./app/controller2') //part 2 implementation
const controller3 = require('./app/controller3') //part 3 implementation

//debug
common.setDebug(false) //set true for console debug outputs

app.get('/I/want/title', (req, resp) => {
	//resp.send('Hello World from Ali Adnan')
	controller3.iWantTitleController(req, resp)
})

app.all('/*', (req, resp) => {
  resp.sendStatus(404);
})



app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})