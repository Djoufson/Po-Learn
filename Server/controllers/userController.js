const User = require('./../models/user')

exports.login = (req, res) => {
  console.log(req.body)
  
  res
    .status(200)
    .json({
      status: true,
      data: {

      }
    })
}