const mongoose = require('mongoose');


const connectDatabase = () => {
   mongoose.connect(process.env.DB_LOCAL_URI,{
       useNewUrlParser:true,
       useUnifiedTopology:true,
   }).then(con => {
       console.log(`Mongodb is connected to the host ${con.connection.host} this is Narikoootam`);
   }).catch((e) => {
    console.log("Failed to connect",e);
   })
}

module.exports = connectDatabase;