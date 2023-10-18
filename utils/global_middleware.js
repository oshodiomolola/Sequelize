const requestBody = (req, res, next) => {
  if (!req.body) res.status(400).json({ result: "FAIL", message: "request body is empty" })

  next()
}

module.exports = { requestBody }