const mongoose = require('mongoose');
require('dotenv').config();
exports.connect = ()=>{
   
        mongoose.connect(process.env.DATABASE_URL).then(()=>{
            console.log("Database connected");
        }).catch((error)=>{
            console.log("DATABASE NOT CONNECTED");
            console.error(error);
            process.exit(1);
        }); 
}