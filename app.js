const express = require('express')
const app = express();
const route = require('./routes/voiture.js')
app.use(express.json());
app.use('/voiture',route)

app.listen(9000,()=>{
    console.log('Server is running on port 9000...')
})