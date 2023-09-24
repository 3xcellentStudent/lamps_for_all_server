const db = require('./index.js')

class Services{
  async writeDoc(collection, data){
    return await db.collection(collection).add(data)
    .then(res => console.log('Документ успешно создан с идентификатором:', res.id))
    .catch(err => console.error('Ошибка при создании документа:', err))
  }

  async readDoc(collection, productID){
    return await db.collection(collection).doc(`${productID}`).get()
    .then(doc => doc.exists ? doc.data() : {status: 'Документ не найден'})}
}

module.exports = new Services()