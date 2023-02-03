const mongoose = require("mongoose");

const DB = process.env.DATABASE;
mongoose.connect(DB).then(() =>{
    console.log(`Database is Connected`);
}).catch((err)=>{
    console.log(err,`Connection Failed`);
});
mongoose.set("strictQuery", true);

// exports.module = DB;