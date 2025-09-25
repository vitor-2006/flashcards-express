import mongoose from "mongoose";

const FlashcardSchema = new mongoose.Schema({
    pergunta: {
        type: String,
        required: true
    },
    resposta: {
        type: String,
        required: true
    },
    idBaralho: {
        type: String,
        required: true
    }
})

export const Flashcard = mongoose.model('flashcard', FlashcardSchema)
// flashcard = []

// idGen = {
//     value: 1
// }

// export { flashcard, idGen }