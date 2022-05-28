const express = require('express')
const app = express();
const port = 3000;

app.get('/tintuc', (req, res)=>{
    return res.send('Hello world')
})

app.listen(port, ()=> console.log(`Express app listening at http://localhost:${port}`))