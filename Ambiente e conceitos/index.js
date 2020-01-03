const express = require('express')

const server = express();

server.use(express.json())

// Query params = ?teste=1
// Router params = /users/1
 // Request body = { informações que vem na rota post e put ex: "name": "Ariel"}

// Localhost:3000/teste

const users = ['Ariel', 'Carlos', 'Diego']

server.use((req, res, next) => {
  console.time('Request')
  console.log(`Método: ${req.method}; URL: ${req.url}`)

 next()

 console.timeEnd('Request')
})

function checkUserExist(req, res, next) {
  if(!req.body.user) {
    return res.status(400).json({ error: 'User name is required'})
  }

  return next()
}

function checkArrayUser(req, res, next) {
  const user = users[req.params.index]
  if(!user) {
    return res.status(400).json({error: 'Usuário não encontrado'})
  }

  req.user = user

  return next()
}

server.get('/users', (req, res) => {
  return res.json(users)
})

server.get('/users/:index', checkArrayUser,(req, res) => {
  return res.json(req.user)
})

server.post('/users', checkUserExist,(req, res) => {
  const {user} = req.body
  users.push(user)
  return res.json(users)
})

server.put('/users/:index', checkUserExist, checkArrayUser, (req, res) => {
  const { user } = req.body
  const { index } = req.params

  users[index] = user
  return res.json(users)
})
server.delete('/users/:index', checkArrayUser ,(req, res) => {
  const { index } = req.params

  users.splice(index, 1)
  return res.json({Success: 'Usuario Deletado com sucesso'})
})
server.listen(3000);
