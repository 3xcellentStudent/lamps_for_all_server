const paypal = require('./configure')

class Sevices{
  static async createTransaction(data){
    const result = await new Promise((resolve, reject) => {
      paypal.payment.create(data, async (err, payment) => {
        if(err) reject(err)
        else resolve(payment)
      })
    }).then(data => data)
    return result
  }

  static async executeTransaction(){}
}

module.exports = Sevices