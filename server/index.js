const express = require('express');
const connect = require('./ConnectDB/connectDB.JS');
const cors = require('cors')
const dotenv = require('dotenv');
const app = express();

const patientRoutes = require('./Route/patientRoutes');
const rdvRoutes = require('./Route/rdvRoutes');
const medicamentRoutes = require('./Route/medicamentRoutes');
const ordonnanceRoutes = require('./Route/ordonnanceRoutes');
const notificationRoutes = require('./Route/notificationRoutes');
dotenv.config();
const port = process.env.PORT;

app.listen(port, (e) => {
  if (e) {
    console.log("server is failed ⚠️");
  } else {
    console.log(`server is connected on port ${port} ✅`);
  }
});


connect();

app.use(cors({
  origin: '*'
})); 
app.use(express.json());
app.use('/MedicaNet', patientRoutes);
app.use('/MedicaNet', rdvRoutes);
app.use('/MedicaNet', medicamentRoutes);
app.use('/MedicaNet', ordonnanceRoutes);
app.use('/MedicaNet', notificationRoutes);