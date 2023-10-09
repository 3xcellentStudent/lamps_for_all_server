const router = require('express').Router()
const {PRODUCTS_ID, CREATE_PAYMENT} = require('./routes')
const FBServices = require('../services/firebase/firebase')
const {createTransaction} = require('../services/paypal/services')

router.get(PRODUCTS_ID, async (req, res) => {
  const {id: productID} = req.query
  const collection = req.url.split('?')[0]
  const response = await FBServices.readDoc(collection, productID)
  res.json(response)
})

router.post(PRODUCTS_ID, async (req, res) => {
  const {body: data} = req
  const collection = req.url.split('/')[1]
  const response = await FBServices.writeDoc(collection, data)
  res.json(response)
})

router.post(CREATE_PAYMENT, async (req, res) => {
  const {body: data} = req
  const transaction = await createTransaction(data)
  console.log(transaction)
  return res.json(transaction)
})

module.exports = router