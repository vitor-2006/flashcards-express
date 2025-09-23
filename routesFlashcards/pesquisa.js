import { flashcard } from "./array.js"

function pesqPorID(req, res) {
    const { id } = req.query
    if(id.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }

    const flashcardFind = flashcard.find((element) => {
        if(parseInt(element.id) === parseInt(id)){
            return element
        }
    })

    if(!flashcardFind){
        return res.status(404).send("flashcard não encontrado!")
    }

    return res.status(201).send(flashcardFind)
}

function pesqPorPergunta(req, res) {
    const { pergunta } = req.query
    if(pergunta.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }

    const flashcardFind = flashcard.filter((element) => {
        if(element.pergunta.toLowerCase().trim() === pergunta.toLowerCase().trim()){
            return element
        }
    })

    if(!flashcardFind){
        return res.status(404).send("flashcard não encontrado!")
    }

    return res.status(201).send(flashcardFind)
}

function pesqPorResposta(req, res) {
    const { resposta } = req.query
    if(resposta.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }

    const flashcardFind = flashcard.filter((element) => {
        if(element.resposta.toLowerCase().trim() === resposta.toLowerCase().trim()){
            return element
        }
    })

    if(!flashcardFind){
        return res.status(404).send("flashcard não encontrado!")
    }

    return res.status(201).send(flashcardFind)
}

function pesqPorIDBaralho(req, res) {
    const { IDBaralho } = req.query
    if(IDBaralho.trim() === ""){
        return res.status(404).send("pesquisa nula!")
    }

    const flashcardFind = flashcard.filter((element) => {
        if(parseInt(element.IDBaralho) === parseInt(IDBaralho)){
            return element
        }
    })

    if(!flashcardFind){
        return res.status(404).send("flashcard não encontrado!")
    }

    return res.status(201).send(flashcardFind)
}