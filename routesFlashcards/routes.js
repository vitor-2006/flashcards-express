import express from 'express'
// import { getFlashcard } from './get.js';
import { getFlashcard } from "./get.js";
// import { postFlashcard } from './post.js';
import { createFlashcard } from "./post.js";
// import { putFlashcard } from './put.js';
import { updateFlashcard } from "./put.js";
// import { deleteFlashcard } from './delete.js';
import { deleteFlashcard } from "./delete.js";
import { pesqPorPergunta, pesqPorResposta, pesqPorIdBaralho } from './pesquisa.js';

const routesFlash  = express.Router();

// routesFlash.get('/flash', getFlashcard);
routesFlash.get('/flash', async (req, res) => {
    const flashcards = await getFlashcard()
    return res.status(200).send(flashcards)
});

// routesFlash.post('/flash', postFlashcard);
routesFlash.post('/flash', async (req, res) => {
    const { pergunta, resposta, idBaralho } = req.body
    const newFlashcard = await createFlashcard(pergunta, resposta, idBaralho)
    if(!newFlashcard) {
        return res.status(400).send("flashcard inválido!")
    }
    return res.status(201).send({ message: 'flashcard criado com sucesso', flashcard: newFlashcard })
});

// routesFlash.put('/flash/:id', putFlashcard);
routesFlash.put('/flash/:id', async (req, res) => {
    const { id } = req.params
    const { pergunta, resposta, idBaralho } = req.body
    const updatedFlashcard = await updateFlashcard(id, pergunta, resposta, idBaralho)
    if(updatedFlashcard) {
        return res.status(200).send({ message: 'flashcard atualizado com sucesso', flashcard: updatedFlashcard })
    } else {
        return res.status(404).send({ message: 'flashcard não encontrado ou inválido' })
    }
});


// routesFlash.delete('/flash/:id', deleteFlashcard);
routesFlash.delete('/flash/:id', async (req, res) => {
    const { id } = req.params
    const deletedFlashcard = deleteFlashcard(id)
    if(deletedFlashcard) {
        return res.status(200).send({ message:'flashcard deletado com sucesso', flashcard: deletedFlashcard })
    } else {
        return res.status(404).send({ message: 'flashcard não encontrado' })
    }
});



// routesFlash.get('/flash/id/', )
routesFlash.get('/flash/search', async (req, res) => {
    const { pergunta, resposta, idBaralho } = req.query
    let searchFlash 
    if(pergunta) {
       searchFlash = await pesqPorPergunta(pergunta)
    } else if(resposta) {
        searchFlash = await pesqPorResposta(resposta)
    } else if(idBaralho) {
        searchFlash = await pesqPorIdBaralho(idBaralho)
    }
    if(searchFlash) {
        return res.status(200).send(searchFlash)
    } else {
        return res.status(404).send({ message: 'flashcard não encontrado' })
    }
})

export {routesFlash}