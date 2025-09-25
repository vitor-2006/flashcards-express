import express from 'express'
// import { getFlashcard } from './get.js';
import { getFlashcard } from "./get.js";
// import { postFlashcard } from './post.js';
import { createFlashcard } from "./post.js";
// import { putFlashcard } from './put.js';
import { updateFlashcard } from "./put.js";
// import { deleteFlashcard } from './delete.js';
import { deleteFlashcard } from "./delete.js";

const routesFlash  = express.Router();

// routesFlash.get('/flash', getFlashcard);
routesFlash.get('/flash', async (req, res) => {
    const flashcards = await getFlashcard()
    res.status(200).send(flashcards)
});

// routesFlash.post('/flash', postFlashcard);
routesFlash.post('/flash', async (req, res) => {
    const { pergunta, resposta, idBaralho } = req.body
    const newFlashcard = await createFlashcard(pergunta, resposta, idBaralho)
    res.status(201).send({ message: 'flashcard criado com sucesso', flashcard: newFlashcard })
});

// routesFlash.put('/flash/:id', putFlashcard);
routesFlash.put('/flash/:id', async (req, res) => {
    const { id } = req.params
    const { pergunta, resposta, idBaralho } = req.body
    const updatedFlashcard = await updateFlashcard(id, pergunta, resposta, idBaralho)
    if(updatedFlashcard) {
        res.status(200).send({ message: 'flashcard atualizado com sucesso', flashcard: updatedFlashcard })
    } else {
        res.status(404).send({ message: 'flashcard não encontrado' })
    }
});


// routesFlash.delete('/flash/:id', deleteFlashcard);
routesFlash.delete('/flash/:id', async (req, res) => {
    const { id } = req.params
    const deletedFlashcard = deleteFlashcard(id)
    if(deletedFlashcard) {
        res.status(200).send({ message:'flashcard deletado com sucesso', flashcard: deletedFlashcard })
    } else {
        res.status(404).send({ message: 'flashcard não encontrado' })
    }
});



// routesFlash.get('/flash/id/', )

export {routesFlash}