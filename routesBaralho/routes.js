import express from 'express'
import { getBaralho } from './get.js'
import { postBaralho } from './post.js'
import { putBaralho } from './put.js'
import { deleteBaralho } from './delete.js'
import { pesqPorID, pesqPorTitulo } from './pesquisa.js'

const routesBaralho  = express.Router();

routesBaralho.get('/baralho', getBaralho);
routesBaralho.post('/baralho', postBaralho);
routesBaralho.put('/baralho/:id', putBaralho);
routesBaralho.delete('/baralho/:id', deleteBaralho);

routesBaralho.get('/baralho/id/', pesqPorID)
routesBaralho.get('/baralho/titulo/',pesqPorTitulo )

export {routesBaralho}