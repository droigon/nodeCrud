const express = require('express');
const bodyParser = require('body-parser')
// const router = express.Router();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log("Hello ")
  res.send("movies");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));