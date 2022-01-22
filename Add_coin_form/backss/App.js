const mongoose = require("mongoose");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const { listenerCount } = require("./Model/User");
var cors = require('cors')

require('./Model/User');

app.use(bodyParser.json());
app.use(cors())



var corsOptions = {
    origin: ' http://localhost:3000/Add/Login',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const UserX = mongoose.model("USERS")

//Login Api
app.get('/Login', async (req, res) => {
    try {
        const user = await UserX.find({})
        
        res.send(user);
    }
    catch (error) {
        res.status(500)
    }
})


app.post('/Add/Login', async (req, res) => {
    try {
        const user = new UserX();
        // user.Username=req.body.Username;
        // user.Password=req.body.Password;
        user.Name=req.body.Name;
        user.Symbol=req.body.Symbol;
        user.Description=req.body.Description;
        user.Logo=req.body.Logo;
        user.Price=req.body.Price;
        user.Market_Cap=req.body.Market_Cap;
        user.Launch_Date=req.body.Launch_Date;
        user.Binance_Smart_Chain=req.body.Binance_Smart_Chain;
        user.Ethereum=req.body.Ethereum;
        user.Solana=req.body.Solana;
        user.Polygon=req.body.Polygon;
        user.Website=req.body.Website;
        user.Telegram=req.body.Telegram;
        user.Twitter=req.body.Twitter;
        user.Additional_Information=req.body.Additional_Information;
        

        await user.save();

        res.send(user);
    }
    catch (error) {
        res.status(500)
    }
})

mongoose.connect("mongodb+srv://safi:safi123@cluster0.9baf1.mongodb.net/Work1?retryWrites=true&w=majority",
    {
        useNewUrlParser: true, useUnifiedTopology: true,
        useCreateIndex: true, useFindAndModify: false
    })
    .then(() => {
        console.log('Connected to MongoDB');
        server = app.listen(3000, () => {
            console.log("Listening to port: 3000");
        });
    });