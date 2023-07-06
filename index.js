const express = require('express')
const app = express()
const port = 8000;
const {db} = require("./src/services/firebase/database")
const routes = require("./src/routes")

app.use(db);

routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})