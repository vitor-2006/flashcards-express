// import { flashcard } from "./array.js"
import { Flashcard } from "./schema.js"

export const getFlashcard = async () => {
    try {
        return await Flashcard.find()
    } catch (error) {
        console.log('erro ao buscar os flashcards', error.message)
        throw error
    }
}

// export function getFlashcard (req, res) {
//     if(flashcard.length === 0){
//         return res.status(404).send("nenhum flashcard registrado!")
//     }
//     return res.status(201).send(flashcard)
// }