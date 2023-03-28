const express = require('express')
const app = express()
var fs = require('fs');
var path = require('path');

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

app.get('/getAssembly/:assemblyFile', (req, res) => {
  // respond with assembly
  assemblyFile = req.params.assemblyFile
  console.log("asked for assembly of " + assemblyFile)
  
  // read assembly from file
  assembly = fs.readFileSync(path.join(__dirname, '/data/', assemblyFile), 'utf8')

  res.send({"assembly": assembly})
})

app.post('/saveAssembly/:assemblyFile/:assembly', (req, res) => {
  // save assembly
  assemblyFile = req.params.assemblyFile
  // decode base64 data
  assembly = Buffer.from(req.params.assembly, 'base64').toString('ascii')
  console.log("saving assembly of " + assemblyFile)
  console.log("assembly: " + assembly)


  res.send({state: "success", error: ""})
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))