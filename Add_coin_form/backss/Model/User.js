const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
  
  // Username:
  // { type:String, required:false},

  // Password :
  // { type:String, required:false},

 Name:
 {type:String, required:false},

 Symbol:
 { type:String, required:false},

 Description:
 { type:String, required:false},

 Market_Cap:
 { type:String, required:false},

 Launch_Date:
 { type:String, required:false},
  
 //coin_contracts

 Binance_Smart_Chain :
 { type:String, required:false},

 Ethereum:
 {type:String, required:false},

 Solana:
 { type:String, required:false},

 Polygon:
 { type:String, required:false},

 //coin_links
 Website:
 { type:String, required:false},

 Telegram:
 { type:String, required:false},

 Twitter:
 { type:String, required:false},

 Additional_Information:
 { type:String, required:false},
})

module.exports=mongoose.model('USERS',UserSchema)

