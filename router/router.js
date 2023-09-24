const router = require('express').Router()
const {PRODUCTS_ID} = require('./routes')
const Services = require('../services/firebase/firebase')

router.get(PRODUCTS_ID, async (req, res) => {
  const {id: productID} = req.query
  const collection = req.url.split('?')[0]
  const response = await Services.readDoc(collection, productID)
  res.json(response)
})

router.post(PRODUCTS_ID, async (req, res) => {
  const {body: data} = req
  const collection = req.url.split('/')[1]
  const response = await Services.writeDoc(collection, data)
  res.json(response)
})

module.exports = router