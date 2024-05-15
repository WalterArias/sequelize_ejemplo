
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

var corsOptions = {
  origin: "http://127.0.0.1:5500",
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res)=> {
  res.send('sequelize ejemplo');
});

app.listen(port, () => {
  console.log(`app on in port: ${port}`);
});
