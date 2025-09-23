import express from 'express'
import { routesBaralho } from './routesBaralho/routes.js';
import { routesFlash } from './routesFlashcards/routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(routesBaralho)
app.use(routesFlash)
	
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});