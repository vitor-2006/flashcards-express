import { flashcard, } from "./array.js";
import { verificarPergunta, verificarResposta, verificarIDBaralho } from "./verificar.js";

export function putFlashcard (req, res) {
    const { id } = req.params

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

    flashcard.find((element) => {
        if(element.id === parseInt(id)){
            let update = req.body
            element.pergunta = update.pergunta
            element.resposta = update.resposta
            element.IDBaralho = update.IDBaralho
            return res.status(200).send("flashcard editado com sucesso!")
        }
    })
    return res.status(404).send("flashcard não encontrado!")
}