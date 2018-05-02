const express = require('express');
const app = express();
const path = require('path')

app.set('port', (process.env.PORT || 80));

app.use(express.static(path.join(__dirname, 'client/build')));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(app.get('port'), function() {
  console.log('AK Golf is running on port', app.get('port'));
});
