const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');
const formRoutes = require('./routes/productRoute.js');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000


connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/products',formRoutes)

app.get('/', (req, res) => res.send('form is running...'))


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
