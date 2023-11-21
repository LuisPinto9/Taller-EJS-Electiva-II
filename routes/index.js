const router = require("express").Router();
const fs = require("fs");

const data = JSON.parse(fs.readFileSync('./json/data.json'))
// fs.readFile("./json/data.json", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error al leer el archivo:", err);
//     return;
//   }
//   try {
//     data = JSON.parse(data);
//   } catch (error) {
//     console.error("Error al analizar el JSON:", error);
//   }
// });

const components = new Map(Object.entries(data))

router.get("/", (req, res) => res.render("index", { title: "Home" }));

router.get("/stock", (req, res) =>
  res.render("inventario", { title: "Inventario", components: components })
);

router.post("/", (req, res) => {
  const { id, name, type, price } = req.body;
  const newGame = {
    id: id,
    nombre: name,
    tipo: type,
    precio: price,
  };
  const newId = games.size + 1;
  games.set(newId, newGame);
  res.sendStatus(200);
});

module.exports = router;
