const mongoose =require("mongoose")

// keep it in env file
const mongoURL = process.env.MANGOOSE_URL;
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Data Base not connection:', error);
});

db.once('open', () => {
  console.log('Data Base Connected successfuly');
});

module.exports=mongoose