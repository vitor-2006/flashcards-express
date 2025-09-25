// import { flashcard } from "./array.js";
import { Flashcard } from "./schema.js"

export const deleteFlashcard = async (id) => {
    try {
        return await Flashcard.findByIdAndDelete(id)
    } catch (error) {
        console.error('Erro ao deletar flashcard:', error.message)
        throw error
    }
}

export const deleteFlashPorBaralho = async (idBaralho) => {
    try {
        return await Flashcard.deleteMany({ idBaralho: idBaralho })
    } catch (error) {
        console.error('Erro ao deletar flashcard:', error.message)
        throw error
    }
}
// export function deleteFlashcard(req, res) {
//     const { id } = req.params
//     const flashcardFind = flashcard.findIndex((element) => element.id == id)

//     if(flashcardFind !== -1){
//         flashcard.splice(flashcardFind, 1)
//         return res.status(200).send('flashcard removido!')
//     }

//     return res.status(404).send("flashcard não encontrado")
// }