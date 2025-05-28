const express = require("express");
const app = express ();
const port = 8000;

const usuariosRoutes = require("./src/routes/usuariosRoutes");

app.get("/", (req, res) => {
    res.send("Olá Mundo");
});

app.use("/usuarios", usuariosRoutes);

app.use((req, res) => {
    res.status(404).send("Rota Não Encontrada");
})


app.listen(port, () => {
    console.log(`Servidor de pé: http://localhost:${port}`);
});


