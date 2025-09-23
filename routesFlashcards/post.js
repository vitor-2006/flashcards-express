import { flashcard, idGen } from "./array.js";
import { verificarPergunta, verificarResposta, verificarIDBaralho } from "./verificar.js";

export function postFlashcard(req, res) {
    const perguntaFind = verificarPergunta(req.body.pergunta)
    if(!perguntaFind){
        return res.status(400).send("pergunta inválida!")
    }

    const respostaFind = verificarResposta(req.body.resposta)
    if(!respostaFind){
        return res.status(400).send("resposta inválida!")
    }

    const IDBaralhoFind = verificarIDBaralho(req.body.IDBaralho)
    if(!IDBaralhoFind){
        return res.status(400).send("IDBaralho inválido!")
    }

    const novoFlashcard = 
        {
        'pergunta': req.body.pergunta,
        'resposta': req.body.resposta,
        'IDBaralho': req.body.IDBaralho,
        'id': idGen.value
        }
    idGen.value++
    flashcard.push(novoFlashcard)
    return res.status(200).send('flashcard registrado!')
}