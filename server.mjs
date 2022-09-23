console.log("I am Hiten Kumar");

import express from 'express';
import cors from 'cors'
const app = express()
const port = process.env.PORT||4000;

let todos = [];

app.use(express.json());
app.use(cors())
app.post('/todo',(req,res)=>{
  
  todos.push(req.body.text);
req.send({

  message:"Your todo is saved",
  data:todos
})

})
app.get('/todos', (req, res) => {

  res.send({
    message:"Here is todos list "
    data: todos
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})