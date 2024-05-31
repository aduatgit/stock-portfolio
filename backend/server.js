const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("route");
});

const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");

app.use("/users", usersRoute);
app.use("/products", productsRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Node.js HTTP server is running on port ${port}`);
});
