// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const vehicleTypes = [
  { id: 1, type: "Car" },
  { id: 2, type: "Bike" },
  { id: 3, type: "Truck" },
];

app.get("/api/vehicles", (req, res) => {
  const wheels = req.query.wheels;

  const filteredTypes = vehicleTypes.filter((type) =>
    wheels === "2" ? type.type === "Bike" : type.type !== "Bike"
  );
  res.json(filteredTypes);
});

app.post("/api/book", (req, res) => {
  console.log(req.body);
  res.status(200).send("Booking Successful");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
