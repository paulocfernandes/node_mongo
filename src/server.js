import express, {request, response} from 'express';



const server = express()


server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(process.env.PORT)