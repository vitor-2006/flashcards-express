// import { flashcard, } from "./array.js";
// import { verificarPergunta, verificarResposta, verificarIDflashcard } from "./verificar.js";
import { Flashcard } from "./schema.js"
import { verificPorIdBaralho } from "../routesBaralho/pesquisa.js"

export const updateFlashcard = async (pergunta, resposta, idBaralho) => {
    try {
        const arrayBaralho = verificPorIdBaralho(idBaralho)
        if(arrayBaralho === 0) {
            return false
        }
        const updatedFlashcard = await Flashcard.findByIdAndUpdate(
            id,
            { pergunta, resposta, idBaralho },
            { new:true, runValidators:true }
        )
        return updatedFlashcard
    } catch (error) {
        console.error('Erro ao atualizar o flashcard:', error.message)
        throw error
    }
}

// export function putFlashcard (req, res) {
//     const { id } = req.params

//     const perguntaFind = verificarPergunta(req.body.pergunta)
//     if(!perguntaFind){
//         return res.status(400).send("pergunta inválida!")
//     }

//     const respostaFind = verificarResposta(req.body.resposta)
//     if(!respostaFind){
//         return res.status(400).send("resposta inválida!")
//     }

//     const IDflashcardFind = verificarIDflashcard(req.body.IDflashcard)
//     if(!IDflashcardFind){
//         return res.status(400).send("IDflashcard inválido!")
//     }

//     flashcard.find((element) => {
//         if(element.id === parseInt(id)){
//             let update = req.body
//             element.pergunta = update.pergunta
//             element.resposta = update.resposta
//             element.IDflashcard = update.IDflashcard
//             return res.status(200).send("flashcard editado com sucesso!")
//         }
//     })
//     return res.status(404).send("flashcard não encontrado!")
// }