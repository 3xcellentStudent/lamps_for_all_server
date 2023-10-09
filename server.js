require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./router/router')
const Services = require('./services/firebase/firebase')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
// app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(router)

const data = {
  "status":{
    "code":200,
    "data":"success",
    "executionTime":"1.63",
    "requestTime":"2023-09-18 09:21:18",
    "requestId":"1e6a32a82e96500ae79c13432cd65395",
  },
  "localization":{
    "locale":"en_US",
    "currency":"USD",
    "country":"US",
  },
  "settings": {
    "available":true,
    "itemId":"3256805057913223",
    "title":"Night Light Motion Sensor Light Wireless USB Under Cabinet Light For Cabinet Bedroom Wardrobe Indoor Lighting 3color in One Lamp",
    "catId":39050508,
    "sales":"5,000+",
    "wishCount":6134,
    "itemUrl":"//www.aliexpress.com/item/3256805057913223.html",
  },
  "images":["//ae01.alicdn.com/kf/S18b4ca29374c4ab087d6ce1f7a10a526f/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg","//ae01.alicdn.com/kf/S6dab4fd2559a4e6aa3d95d8e30da9aeai/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg","//ae01.alicdn.com/kf/S83bf361d216a4f9793e54ddf5555d753F/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg","//ae01.alicdn.com/kf/S5d0a40a0900d453fbc10484da0251238x/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg","//ae01.alicdn.com/kf/S2b48e927165245058fa7a1dc68676b9aH/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg","//ae01.alicdn.com/kf/S322a059a2f3b4341b276e7dd3f7e7c35z/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg"],
  "video":{
    "id":1100037981866,
    "thumbnail":"//ae01.alicdn.com/kf/S18b4ca29374c4ab087d6ce1f7a10a526f/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg_960x960.jpg",
    "url":"//video.aliexpress-media.com/play/u/ae_sg_item/2215178843610/p/1/e/6/t/10301/1100037981866.mp4"
  },
  "description": [
    {
      "rubric":"High Quality Material",
      "text":"Constructed from high-quality aluminum painted in silver, Inoleds perform a constant flash with a color temperature of 3200K and 550LM which allows you to adjust light based on your mood. Either light for studying or creating a softer ambiance. A perfect choice for casual, contemporary, or meditative environments."
    },
    {
      "rubric":"Just A Touch",
      "text":"There is nothing to confuse with a one-touch control function. Simply tap the switch once it turns on and hold down a second to adjust the desired mood of brightness. Tap more to switch the turn-OFF. The ultimate user-friendly lighting solution."
    },
  ],
  "images":["//ae01.alicdn.com/kf/S37b38e3c72f44de79eb7d1775bb7c245q.jpg","//ae01.alicdn.com/kf/S8caa5c20fa794edd940c0eb1cbf09001d.jpg","//ae03.alicdn.com/kf/S9bced933db2045439aa1cce7e2c233ccx.jpg","//ae01.alicdn.com/kf/S6a7f5247942d4c4698eaa8b257819630o.jpg","//ae01.alicdn.com/kf/S1598c9c2824842239929702b5f436259m.jpg","//ae03.alicdn.com/kf/S2da018f27cb34dda8a7c2ae4c632f18bv.jpg","//ae03.alicdn.com/kf/S96fb16e1e15746858e7e9f658eb949ddJ.jpg","//ae01.alicdn.com/kf/Sd1eb6c3e85de4ee49b014fe10571fdf1s.jpg","//ae01.alicdn.com/kf/S27c4a8362b3248dfa6f8830b109a62cfm.jpg","//ae01.alicdn.com/kf/Sa90dcecc061e42439e412ba2b0fc401fw.jpg","//ae01.alicdn.com/kf/H23b64aebca8942e098afe2392441267fw.jpg","//ae01.alicdn.com/kf/Sad9a1f1532c7473594a0bfd94147286d0.jpg","//ae01.alicdn.com/kf/S67574743d61e47c0aa34444ba9b74527c.jpg","//ae01.alicdn.com/kf/S9dc8aa2d9f5b4ee59d8971e2dffaf0cdb.jpg","//ae01.alicdn.com/kf/S77f08c9720aa44a0ab00ead648bb07624.jpg","//ae01.alicdn.com/kf/S44a35e0038af4709bb6f51525ca13d41A.jpg","//ae01.alicdn.com/kf/S7ddc7b0ccc4b4cf4b6ddf9a5be591ed46.jpg"],
  "fieldsInfo": [
    {
      "title":"Color",
      "values": [
        {
          "name":"Black 20CM",
          "image":"//ae01.alicdn.com/kf/Sf8ac1268cbef482f839471fe821d9a4du/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg",
        },
        {
          "name":"White 20CM",
          "image":"//ae01.alicdn.com/kf/S238a66b1911f49a490853708d171bcf5c/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg",
        },
        {
          "name":"Black 40CM",
          "image":"//ae01.alicdn.com/kf/Sf3061b6e84c9448bb058af4cff0e2b95j/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg",
        },
        {
          "name":"White 40CM",
          "image":"//ae01.alicdn.com/kf/S85b87ba543ef46e2b381e4f0139bf3e09/Night-Light-Motion-Sensor-Light-Wireless-USB-Under-Cabinet-Light-For-Cabinet-Bedroom-Wardrobe-Indoor-Lighting.jpg",
        }
      ]
    },
    {
      "title":"Quantity",
      "values":[
        {"name": "1 unit - 50$"},
        {"name": "2 unit - 100$"},
        {"name": "3 unit - 150$"},
        {"name": "4 unit - 200$"},
      ]
    },
  ],
  "reviews":{
    "count":876,
    "starRate":"4.7"
  },
  "delivery":{
    "shippingFrom":"China",
    "shippingFromCode":"CN",
    "shippingTo":"United States",
    "shippingToCode":"US",
    "shippingOutDays":7,
    "shippingList":[
      {
        "shippingFrom":"China",
        "shippingFromCode":"CN",
        "shippingTo":"United States",
        "shippingToCode":"US",
        "shippingFee":"1.46",
        "shippingCompany":"AliExpress Selection Standard",
        "shippingTime":60,
        "estimateDeliveryDate":"2023-10-04",
        "trackingAvailable":true,
        "note": ["Free shipping · 12-day delivery","delivery by Oct 04","and a $1.00 coupon for late delivery ","Get a $1.00 off coupon if order arrives after Oct 04. 12-day delivery includes only working days."]
      }
    ],
    "packageDetail":{
      "weight":0.134,
      "length":44,
      "height":2,
      "width":4
    }
  },
  "service":[
    {
      "title":"Free Return ",
      "desc":"You will have 15 days from receiving the item to return it without any reason and for free if the item's conditions meet our requirements. Each buyer can benefit from the Free Return for maximum 3 times per month.  ",
      "icon":null
    },
    {
      "title":"On-time guarantee",
      "desc":"Collect a $1.00 coupon if your order arrives after the estimated delivery date. ",
      "icon":null
    },
    {
      "title":"75-day Buyer Protection",
      "desc":"Get a refund if the item arrives late or not as described. ",
      "icon":null
    }
  ],
  "seller":{
    "sellerId":2671922324,
    "storeTitle":"PDQ Dropshipping Store",
    "storeId":1102524551,
    "companyId":2671922324,
    "storeUrl":"//www.aliexpress.com/store/1102524551",
    "storeImage":"//ae01.alicdn.com/kf/S7f770946de0d4e8c80e7d06d15f6009d7.png",
    "storeRating":"94.9"
  },
  "specifications": [
    {
      "name":"Is Smart Device",
      "value":"no"
    },
    {
      "name":"Model Number",
      "value":"Motion Sensor Light"
    },
    {
      "name":"Is Batteries Required",
      "value":"No"
    },
    {
      "name":"Usage",
      "value":"EMERGENCY"
    },
    {
      "name":"Voltage",
      "value":"5V"
    },
    {
      "name":"Is Batteries Included",
      "value":"Yes"
    },
    {
      "name":"Light Source",
      "value":"LED Bulbs"
    },
    {
      "name":"Body Material",
      "value":"Aluminum"
    },
    {
      "name":"Certification",
      "value":"ce"
    },
    {
      "name":"Battery Type",
      "value":"Lithium Metal"
    },
    {
      "name":"Power Source",
      "value":"DC,Rechargeable Battery"
    },
    {
      "name":"Wattage",
      "value":"0-5W"
    },
    {
      "name":"Power Generation",
      "value":"motion"
    },
    {
      "name":"Type",
      "value":"Night Light"
    },
    {
      "name":"Shape",
      "value":"DIY"
    },
    {
      "name":"Is Bulbs Included",
      "value":"Yes"
    },
    {
      "name":"Brand Name",
      "value":"PDQ"
    },
    {
      "name":"Origin",
      "value":"Mainland China"
    },
    {
      "name":"Item Type",
      "value":"Night Lights"
    }
  ],
}

app.listen(PORT, async () => {
  try {
    console.log(`Server started on PORT: ${PORT}`)
  } catch(err){console.log('Server dont start', err)}
})