const router = require("express").Router();

const games = new Map();

games.set(1, { id: "1010", nombre: "COD", tipo: "Shooter", precio: "300000" });
games.set(2, {
  id: "2010",
  nombre: "Warzone",
  tipo: "Shooter",
  precio: "250000",
});
games.set(3, { id: "3010", nombre: "Halo", tipo: "Shooter", precio: "200000" });
games.set(4, {
  id: "4101",
  nombre: "Fallout",
  tipo: "Shooter",
  precio: "300000",
});

router.get("/", (req, res) =>
  res.render("index", { title: "Gestión de juegos", games: games })
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
  res.sendStatus(200)
});

module.exports = router;
