const path = require('path');
const express = require('express');
const app = express(); //to get express app
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT ? process.env.PORT : 3000;

app.use(express.static(publicPath)); //to serve all asstes from given directory

app.get('*', (request, response)=> {
    response.sendFile(path.join(publicPath, 'index.html'));
});


app.listen(port, ()=> {
    console.log('Server is up');
}); //to start server