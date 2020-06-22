import express from 'express'
import path from 'path'
import cors from 'cors'
import routes from './routes'
import { errors } from 'celebrate'
import { celebrate } from 'celebrate'

const app = express()

app.use(cors())
app.use(express.json()) // Funcionalidade para o express entender o corpo da requisiçao em formato json
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando no sistema

// GET: Busca uma ou mais informação no backend
// POST: Cria uma nova informação no backend
// PUT: Atualiza uma informação existente no backend
// DELETE: Remove uma informação no backend

// Request Param: Parâmetros que vem na própria rota que identificam um recurso (Obrigatório)
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informações

app.use(errors())

app.listen(3333)