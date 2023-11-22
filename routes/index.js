const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../json/data.json");

let data = Object.values(JSON.parse(fs.readFileSync(dataFilePath)));

router.get("/", (req, res) => res.render("index", { title: "Home" }));

router.get("/stock", (req, res) =>
  res.render("inventario", { title: "Inventario", components: data })
);

router.delete("/stock/:id", (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((component) => component.id === id);
  if (index !== -1) {
    data.splice(index, 1);

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  const { id, nombre, marca, cantidad, costo } = req.body;

  const newComponent = {
    id: id,
    nombre: nombre,
    marca: marca,
    cantidad: cantidad,
    costo: costo,
  };

  data.push(newComponent);

  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

  res.sendStatus(200);
});

router.put("/stock/:id", (req, res) => {
  const idParam = req.params.id;
  const { nombre, marca, cantidad, costo } = req.body;

  const index = data.findIndex((component) => component.id === idParam);

  if (index !== -1) {
    data[index] = {
      id: idParam,
      nombre: nombre,
      marca: marca,
      cantidad: cantidad,
      costo: costo,
    };

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    res.sendStatus(200);
  } else {
    res.status(404).send("Componente no encontrado");
  }
});

module.exports = router;
