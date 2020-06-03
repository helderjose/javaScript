const express = require('express'); //load the express
var cors = require('cors'); // load cors
var app = express();

app.use(cors())

/*
req = request
res = response
*/
app.get('/', (req, res) => {
  // console.log("headers ", req.headers)
  res.send('<h1>Hello Express!</h1>');
  // res.send({
  //   name: 'Andrew',
  //   likes: [
  //     'Biking',
  //     'Cities'
  //   ]
  // });
});

// app.get('/about', (req, res) => {
//   res.send('About Page');
// });
// app.get('/hello', (req, res) => {
//   res.sendFile(`${ __dirname }/hello/hello.html`);
//   // res.sendFile('/data/helder/programacao2/nodejs/servers/estudos/hello/hello.html');
// });

app.get('/ajax-info', (req, res) => {
  setTimeout(() => {
    res.sendFile(`${ __dirname }/api/ajax-info.txt`);
  }, 1000);
  // res.sendFile('/data/helder/programacao2/nodejs/servers/estudos/hello/ajax_info.txt');
});

// app.get('/hello/ajax-info', (req, res) => {
//   setTimeout(() => {
//     res.sendFile(`${ __dirname }/hello/ajax_info.txt`);
//   }, 1000);
//   // res.sendFile('/data/helder/programacao2/nodejs/servers/estudos/hello/ajax_info.txt');
// });

// // /bad - send back json with errorMessage
// app.get('/bad', (req, res) => {
//   res.send({
//     errorMessage: 'Unable to handle request'
//   });
// });

// app.post('/test', (req, res) => {
//   console.log("no post")
//   console.log("headers ", req.headers)
//   res.send('NO POST');
// });

console.log("localhost:3000")
app.listen(3000); //localhost:3000
