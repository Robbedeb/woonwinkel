var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/pages/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/pages/comment', function(req, res, next) {
  let opmerking = req.body.opmerking;
  res.render('comment', { opmerking: opmerking });
}); 

router.post
module.exports = router;