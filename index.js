const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const app = express();


//init middleware
//app.use(logger);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extend: false }));


// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));