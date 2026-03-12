const express = require("express");
const cors = require("cors");
const path = require("path");

const uploadRoute = require("./routes/upload");

const app = express();

app.use(cors());
app.use(express.json());

// serve uploaded images
app.use("/uploads", express.static("uploads"));

app.use("/api", uploadRoute);

const PORT = 3400;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});