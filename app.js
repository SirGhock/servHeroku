let express = require('express')
let app = express()
let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})


app.get('/', function (req, res) {
  var fs = require('fs');
  const texto = fs.readFile('./vavpvbrsvz/qvnevb.txt', function (err, data) {
    if (err) {
      console.error("Could not open file: %s", err);
      process.exit(1);
    }
    res.send(data.toString('utf8'));
  });

  
});