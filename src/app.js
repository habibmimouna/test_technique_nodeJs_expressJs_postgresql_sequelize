const express = require("express");
const routes = require("./routes/chicken.routes");
const farmroutes = require("./routes/farmyard.routes");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options = require('./routes/swagger');
const app = express();

app.use(express.json());

const db = require("./models");



const specs = swaggerJsDoc(options);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(specs));
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use("/chicken", routes);
app.use("/farmyard", farmroutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
