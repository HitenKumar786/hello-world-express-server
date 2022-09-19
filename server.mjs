console.log("I am Hiten Kumar");

import express from 'express';
const app = express()
const port = process.env.PORT||3000;

app.get('/', (req, res) => {
    console.log("someone is requesting on this server", new Date());
  res.send('Hello World form Hiten Kumar!' + req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})