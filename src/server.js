import express from 'express';
import mongose from 'mongose '
import 'dotenv/config' 



const server = express()

const HOST = localhost
const PORT = 5000

server.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(PORT, () => {
    console.log (`http://${HOST}:${PORT}`)
})

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

mongose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.mg3wraz.mongodb.net/usuario?retryWrites=true&w=majority`)
.then(() => {
    console.log('BD conectado com sucesso')
} )
.catch(error => {
    console.log ('Erro ao conectar no BD', error)
})