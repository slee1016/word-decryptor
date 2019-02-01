const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use("/", express.static(path.join(__dirname + "/../client/dist")));

let port = 3005;
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});