const nodemailer = require('nodemailer');
require('dotenv').config()

let mailTransporter =nodemailer.createTransport({
    service: "gmail",
    auth:{
        user:'4demo.mern@gmail.com',
        pass: process.env.PASS
    }
})

let details = {
    from:"4demo.mern@gmail.com",
    to: "robinjoseph.cse@gmail.com",
    subject:  "My second nodemailer mail.",
    text: "My second nodemailer text content"
}

mailTransporter.sendMail(details,(err)=>{
    if(err){
        console.log("Error occured",err)
    }
    else{   
        console.log("Email send successfully")
    }
})