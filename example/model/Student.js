const mongoose = require('mongoose')

const Student = new mongoose.Schema({
  firstName: { type:String, default:'', trim:true },
  lastName: { type:String, default:'', trim:true },
  email: { type:String, default:'', trim:true },
  address: { type:String, default:'', trim:true },
  number: { type:Number, default:0 }
})

module.exports = mongoose.model('Student', Student)