require('dotenv').config ();
const express = require('express');

const app = express()
const port = process.env.PORT || 3000;
console.log('process.env.PORT-',process.env.PORT);

app.use(express.json())

app.get('/', (req, res) => {
  res.send({message:'Hello World!'})
});
app.post('/', (req, res) => {
    res.send(req.body)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})