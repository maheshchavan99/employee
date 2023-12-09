const mongoose =require("mongoose")

// keep it in env file
const mongoURL = process.env.MANGOOSE_URL||"mongodb+srv://mahesh636367:Qrhl3FecLq3ExyUg@cluster0.osh0qdu.mongodb.net/mern-rooms";
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Data Base not connection:', error);
});

db.once('open', () => {
  console.log('Data Base Connected successfuly');
});

module.exports=mongoose