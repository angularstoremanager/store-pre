const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/dist/store/browser'))
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname, '/dist/store/browser', ''))
});

app.listen(process.env.PORT || 5000)
