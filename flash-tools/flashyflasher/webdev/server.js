const express = require('express')
const app = express()
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

// set root dir
app.use(express.static(__dirname + '/static/'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  // respond with index.html
  res.sendFile('/index.html')
})

app.get('/getFiles', (req, res) => {
  // respond with list of files
  files = {"files": []}
  // look for files in /data dir
  // add them to files
  var dir = path.join(__dirname, '/data/');
  fs.readdirSync(dir).forEach(file => {
    files["files"].push(file)
  })
  res.send(files)
})

app.post('/getAssembly', jsonParser, (req, res) => {
  assemblyFile = req.body.assemblyFile
  console.log("asked for assembly of " + assemblyFile)
  
  // read assembly from file
  assembly = fs.readFileSync(path.join(__dirname, '/data/', assemblyFile), 'utf8')

  res.send({"assembly": assembly})
})

app.post('/saveAssembly', jsonParser, (req, res) => {
  // save assembly
  assemblyFile = req.body.assemblyFile
  assembly = req.body.assembly
  console.log("saving assembly of " + assemblyFile)
  console.log("assembly: " + assembly)
  res.send({state: "success", error: ""})
})

app.post('/upload', (req, res) => {
  // Sleep for 10 sec
  // respond with compiling.html

  // sleep
  var start = new Date().getTime();
  var end = start;
  while(end < start + 10000) {
    end = new Date().getTime();
  }
  res.send({state: "success", error: "", message: "Press LOAD now !"})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))