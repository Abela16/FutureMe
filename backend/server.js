const express = require("express");
const cors = require("cors");
const predictRoutes = require("./routes/predict");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Future Dev Twin API is running...");
});

app.use("/predict", predictRoutes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
