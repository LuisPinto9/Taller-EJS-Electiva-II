const router = require("express").Router();
const fs = require("fs");

const data = JSON.parse(fs.readFileSync('./json/data.json'))

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
