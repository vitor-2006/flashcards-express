import express from 'express'
import { getFlashcard } from './get.js';
import { postFlashcard } from './post.js';
import { putFlashcard } from './put.js';
import { deleteFlashcard } from './delete.js';

const routesFlash  = express.Router();

routesFlash.get('/flash', getFlashcard);
routesFlash.post('/flash', postFlashcard);
routesFlash.put('/flash/:id', putFlashcard);
routesFlash.delete('/flash/:id', deleteFlashcard);

routesFlash.get('/flash/id/', )

export {routesFlash}