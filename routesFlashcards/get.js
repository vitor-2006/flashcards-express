import { flashcard } from "./array.js"

export function getFlashcard (req, res) {
    if(flashcard.length === 0){
        return res.status(404).send("nenhum flashcard registrado!")
    }
    return res.status(201).send(flashcard)
}