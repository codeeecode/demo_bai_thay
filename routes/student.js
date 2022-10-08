const express = require('express')
const router = express.Router()

//URL: localhost:3000/student
router.get('/', (req, res) => {
  res.send('test thu xem sao')
})

module.exports = router
