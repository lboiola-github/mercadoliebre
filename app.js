const express = require('express');
const path = require('path');
const app = express();

// Acceso a carpeta public
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})


// Rutas

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/home.html'))
})
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/login.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/register.html"));
});
app.post('/login', (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + "/views/login.html");
});