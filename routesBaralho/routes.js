import express from 'express'
// import { getBaralho } from './get.js'
import { getBaralho } from './get.js'
// import { postBaralho } from './post.js'
import { createBaralho } from './post.js'
// import { putBaralho } from './put.js'
import { updateBaralho } from './put.js';
// import { deleteBaralho } from './delete.js'
import { deleteBaralho } from './delete.js';
// import { pesqPorID, pesqPorTitulo } from './pesquisa.js'
import { pesqPorTitulo } from './pesquisa.js';

const routesBaralho  = express.Router();


// routesBaralho.get('/baralho', getBaralho);
routesBaralho.get('/baralho', async (req, res) => {
    const baralhos = await getBaralho()
    if(baralhos) {
        return res.status(200).send(baralhos)
    } else {
        return res.status(404).send({ message: 'não têm baralhos registrados' })
    }
})

// routesBaralho.post('/baralho', postBaralho);
routesBaralho.post('/baralho', async (req, res) => {
    const { titulo } = req.body
    const newBaralho = await createBaralho(titulo)
    if(newBaralho){
        return res.status(201).send({ message: 'Baralho criado com sucesso', baralho: newBaralho })
    } else {
        return res.status(400).send({ message: 'erro ao criar baralho' })
    }
})

// routesBaralho.put('/baralho/:id', putBaralho);
routesBaralho.put('/baralho/:id', async (req, res) => {
    const { id } = req.params
    const { titulo } = req.body
    const updatedBaralho = await updateBaralho(id, titulo)
    if(updatedBaralho) {
        return res.status(200).send({ message: 'Baralho atualizado com sucesso', baralho: updatedBaralho })
    } else {
        return res.status(404).send({ message: 'Baralho não encontrado' })
    }
});


// routesBaralho.delete('/baralho/:id', deleteBaralho);
routesBaralho.delete('/baralho/:id', async (req, res) => {
    const { id } = req.params
    const deletedBaralho = deleteBaralho(id)
    if(deletedBaralho) {
        return res.status(200).send({ message:'baralho e seus flashcards deletados com sucesso', baralho: deletedBaralho })
    } else {
        return res.status(404).send({ message: 'baralho não encontrado' })
    }
});

// routesBaralho.get('/baralho/id/', pesqPorID)
// routesBaralho.get('/baralho/titulo/',pesqPorTitulo )
routesBaralho.get('/baralho/search/', async (req, res) => {
    const { titulo } = req.query
    const searchBaralho = await pesqPorTitulo(titulo)
    if(searchBaralho) {
        return res.status(200).send(searchBaralho)
    } else {
        return res.status(404).send({ message: 'baralho não encontrado' })
    }
})

export {routesBaralho}