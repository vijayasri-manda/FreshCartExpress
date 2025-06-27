const mongoose = require("mongoose");
const db= 'mongodb://127.0.0.1:27017/grocery'
// Connect to MongoDB using the connection string

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`💥Connection successful💥`);
}).catch((e) => {   
  console.log(`No connection: ${e}`);   
});
