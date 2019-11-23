const express = require('express')
const cors = require('cors')
const imdb = require('imdb-api');

var app = express()

app.use(cors())

app.get('/', async function (req, res, next) {
    let query = req.query;
    let response;
    if (query.movie) {
      response = await imdb.get({ name: query.movie },
        {
          apiKey: 'ca8c3d9', timeout: 10000
        }).catch(function(){
            return {};
        });
    } else {
      response = "Please provide movie name to search";
    }
  res.json(response)
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})