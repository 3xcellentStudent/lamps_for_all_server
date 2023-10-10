const paypal = require('./configure')

class Sevices{
  static async createTransaction(data){
    const result = await new Promise((resolve, reject) => {
      paypal.payment.create(data, async (err, payment) => {
        if(err) reject(err)
        else resolve(payment)
      })
    }).then(data => data)
    // console.log(result)
    return result
  }

  static async executeTransaction(){
    // paypal.payment.execute()
  }
}

module.exports = Sevices