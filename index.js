import express from 'express'
import { mongoose } from 'mongoose';
import { routesBaralho } from './routesBaralho/routes.js';
import { routesFlash } from './routesFlashcards/routes.js';

const app = express();
const port = 3000;

mongoose.connect(
    "mongodb+srv://vitor-2006:MongoDB7993@cluster0.nkow1bb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)

mongoose.connection.once("open", () => {
    console.log("Conectado ao mongoDB")
})

mongoose.connection?.on("error", (err) => {
    console.error(`Error to connect - MongoDB: Error: ${err.message}`)
})

app.use(express.json());
app.use(routesBaralho)
app.use(routesFlash)
	
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});