const express = require('express');
const siteController = require('../app/controllers/SiteController');
const route = express.Router();

route.get("/", siteController.home);

module.exports = route;