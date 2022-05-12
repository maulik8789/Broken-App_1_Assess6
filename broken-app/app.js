const express = require('express');
const axios = require('axios');
const router = new express.Router()
const ExpressError = require("./expressError")
var app = express();


app.use(express.json());


app.post('/', function(req, res, next) {
  try {
    getUsers();
    console.log("jik")
    let results = [];
    async function getUsers() {
      for(let i = 0; i < req.body.developers.length; i++){
        let users = await axios.get(`https://api.github.com/users/${req.body.developers[i]}`)
        results.push(users.data);
      }
      return res.send(JSON.stringify(results));
    }
  } catch {
    next();
  }
});

module.exports = app;
