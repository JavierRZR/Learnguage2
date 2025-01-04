const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("DOTenv: " + process.env.PRUEBA_ENV);
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
