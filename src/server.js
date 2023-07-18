import express from 'express';
import mongoose from 'mongoose'
import 'dotenv/config' 
import { Usuario } from './models/Usuarios.js';


const server = express()


server.use(
    express.urlencoded({
        extended: true
    })
)

server.use(express.json())

const HOST = 'localhost'
const PORT = 5000

server.get('/', (req, res) => {
  res.send('Hello World!')
})

//endpoint usuario

server.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.find()
    res.status(200).json(usuarios)
})

server.post('/usuario',  async (req, res) => {
    // desestruturação
    const {nome,idade, ativo, email} = req.body

    const usuario = {nome,idade, ativo, email}
    
    await Usuario.create(usuario)
    res.status(201).json('usuario criado')

})

server.put('/usuario/:id', async (req, res) => {
    const id = req.params.id
    const {nome,idade, ativo, email} = req.body
    const usuario = {nome,idade, ativo, email}
   await Usuario.updateOne({ _id: id } ,usuario)
    res.status(200).json('usuario atulizado')
} )

server.listen(PORT, () => {
    console.log (`http://${HOST}:${PORT}`)
})

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

//console.log(DB_USER, DB_PASS)

 mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.mg3wraz.mongodb.net/dc_fs12?retryWrites=true&w=majority`)

.then(() => {
    console.log('BD conectado com sucesso')
} )
.catch(error => {
    console.log ('Erro ao conectar no BD', error)
})