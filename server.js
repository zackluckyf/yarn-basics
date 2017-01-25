const express = require('express');
const PORT = process.evn.PORT || 3000;
let app = express();

app.get('/', (req, res) => {
    res.send('This is my yarn project.');
});

app.listen(port, () =>{
    console.log(`Server is up on port ${PORT}!`);
})