const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5500;

// Servir arquivos estáticos da pasta 'dist'
app.use(express.static(path.join(__dirname, "dist")));

// Rota para lidar com todas as requisições e servir o 'index.html'
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Iniciar o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor iniciado na porta: ${port}`);
});
