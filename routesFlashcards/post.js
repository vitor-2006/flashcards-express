// import { flashcard, idGen } from "./array.js";
// import { verificarPergunta, verificarResposta, verificarIDflashcard } from "./verificar.js";
import { Flashcard } from "./schema.js"

export const createFlashcard = async (pergunta, resposta, idBaralho) => {
    try {
        const newFlashcard = new Flashcard({ pergunta, resposta, idBaralho })
        return await newFlashcard.save()
    } catch (error) {
        console.error('Erro ao criar flashcard', error.message)
        throw error
    }
}

// export function postFlashcard(req, res) {
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

//     const novoFlashcard = 
//         {
//         'pergunta': req.body.pergunta,
//         'resposta': req.body.resposta,
//         'IDflashcard': req.body.IDflashcard,
//         'id': idGen.value
//         }
//     idGen.value++
//     flashcard.push(novoFlashcard)
//     return res.status(200).send('flashcard registrado!')
// }