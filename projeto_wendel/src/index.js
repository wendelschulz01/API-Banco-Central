const express = require('express');
const migrationsRun = require("./database/migrations/index");
const routes = require("./routes/index");

const app = express();

migrationsRun(); // create the db if it doesnt exists

app.use(express.json()); 

app.use(routes);

const port = 3333;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
