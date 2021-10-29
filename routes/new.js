var express = require('express')
var router = express.Router()
const indexFile = require('./index')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('form', { title: 'Add New User' })
})

router.post('/', function (req, res, next) {
  console.log(req.body)
  indexFile.messages.push({
    text: req.body.messageText,
    user: req.body.user,
    added: new Date(),
  })
  res.status(200)
  res.redirect('/')
})

router.get('/cool', function (req, res, next) {
  res.send("You're so cool")
})

module.exports = router
