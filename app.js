const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/productCart', (req, res) => {
    res.sendFile(__dirname + "/views/productCart.html");
});

app.get('/entrega', (req, res) => {
    res.sendFile(__dirname + "/views/entrega.html");
});

app.get('/pago', (req, res) => {
    res.sendFile(__dirname + "/views/pago.html");
});

app.get('/resumen', (req, res) => {
    res.sendFile(__dirname + "/views/resumen.html");
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.get('/recuperar', (req, res) => {
    res.sendFile(__dirname + "/views/recuperar.html");
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get('/perfil', (req, res) => {
    res.sendFile(__dirname + "/views/perfil.html");
});

app.get('/productDetail', (req, res) => {
    res.sendFile(__dirname + "/views/productDetail.html");
});