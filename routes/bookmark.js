var express = require('express');
var router = express.Router();

//GET bookmark page
router.get('/', function (req, res, next) {
  res.render('bookmark');
});

module.exports = router;
