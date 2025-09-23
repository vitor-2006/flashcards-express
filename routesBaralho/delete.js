import { baralho } from "./array.js";
import flashcard from "../routesFlashcards/array.js"

export function deleteBaralho(req, res) {
    const { id } = req.params
    const baralhoFind = baralho.findIndex((element) => element.id === parseInt(id))

    if(baralhoFind !== -1){
        baralho.splice(baralhoFind, 1)
        const findFlash = flashcard.filter((element) => element.IDBaralho !== parseInt(id))
        flashcard.length = 0
        flashcard.push(...findFlash)
        return res.status(200).send('baralho e seus flashcards foram removidos!')
    }

    return res.status(404).send("baralho não encontrado")
}