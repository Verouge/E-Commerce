const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection"); // Import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync Sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  // force set to false so data won't be reset on startup
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
