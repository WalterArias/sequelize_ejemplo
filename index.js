const express = require("express");
const Empleado = require("./models/empleado");
const sequelize = require("./db");

const app = express();
const puerto = 3100;
app.use(express.json());

app.server = app.listen(puerto, () => {
  console.log(`Server ejecutandose en ${puerto}...`);
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("sincronizacion ok!");
  })
  .catch((error) => {
    console.log(`error en la sincronizacion`);
  });

// crud
app.get("/empleados", async (req, res) => {
  const empleados = await Empleado.findAll();
  res.send({ empleados });
});

app.post("/empleados", async (req, res) => {
  const { nombre, apellidos, fechaNace, nivel } = req.body;
  const nuevoEmpleado = await Empleado.create({
    nombre,
    apellidos,
    fechaNace,
    nivel,
  });
  res.send({ nuevoEmpleado });
});

app.put("/empleados/:id", async (req, res) => {
  const { nombre, apellidos, fechaNace, nivel } = req.body;
  const empleado = await Empleado.findByPk(req.params.id);
  if (empleado) {
    empleado.nombre = nombre;
    empleado.apellidos = apellidos;
    empleado.fechaNace = fechaNace;
    empleado.nivel = nivel;
    await empleado.save();
    res.send("ok");
  } else {
    res.status(400).send("no existe el id");
  }
});

app.delete("/empleados/:id", async (req, res) => {
  const empleado = await Empleado.findByPk(req.params.id);
  if (empleado) {
    await empleado.destroy();
    res.send("eliminado !");
  } else {
    res.status(400).send("no existe el id");
  }
});
