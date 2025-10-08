// import { flashcard } from "./array.js"
import { Flashcard } from "./schema.js";

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  
export const pesqPorPergunta = async (pergunta) => {
    try {
      const safePergunta = escapeRegex(pergunta);
      return await Flashcard.find({ pergunta: { $regex: pergunta, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar flashcard', error.message);
      throw error;
    }
}

export const pesqPorResposta = async (resposta) => {
    try {
      const safeResposta = escapeRegex(resposta);
      return await Flashcard.find({ resposta: { $regex: safeResposta, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar flashcard', error.message);
      throw error;
    }
}

export const pesqPorIdBaralho = async (idBaralho) => {
    try {
      const safeIdBaralho = escapeRegex(idBaralho);
      return await Flashcard.find({ idBaralho: { $regex: safeIdBaralho, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar flashcard', error.message);
      throw error;
    }
}

// function pesqPorID(req, res) {
//     const { id } = req.query
//     if(id.trim() === ""){
//         return res.status(404).send("pesquisa nula!")
//     }

//     const flashcardFind = flashcard.find((element) => {
//         if(parseInt(element.id) === parseInt(id)){
//             return element
//         }
//     })

//     if(!flashcardFind){
//         return res.status(404).send("flashcard não encontrado!")
//     }

//     return res.status(201).send(flashcardFind)
// }

// function pesqPorPergunta(req, res) {
//     const { pergunta } = req.query
//     if(pergunta.trim() === ""){
//         return res.status(404).send("pesquisa nula!")
//     }

//     const flashcardFind = flashcard.filter((element) => {
//         if(element.pergunta.toLowerCase().trim() === pergunta.toLowerCase().trim()){
//             return element
//         }
//     })

//     if(!flashcardFind){
//         return res.status(404).send("flashcard não encontrado!")
//     }

//     return res.status(201).send(flashcardFind)
// }

// function pesqPorResposta(req, res) {
//     const { resposta } = req.query
//     if(resposta.trim() === ""){
//         return res.status(404).send("pesquisa nula!")
//     }

//     const flashcardFind = flashcard.filter((element) => {
//         if(element.resposta.toLowerCase().trim() === resposta.toLowerCase().trim()){
//             return element
//         }
//     })

//     if(!flashcardFind){
//         return res.status(404).send("flashcard não encontrado!")
//     }

//     return res.status(201).send(flashcardFind)
// }

// function pesqPorIDBaralho(req, res) {
//     const { IDBaralho } = req.query
//     if(IDBaralho.trim() === ""){
//         return res.status(404).send("pesquisa nula!")
//     }

//     const flashcardFind = flashcard.filter((element) => {
//         if(parseInt(element.IDBaralho) === parseInt(IDBaralho)){
//             return element
//         }
//     })

//     if(!flashcardFind){
//         return res.status(404).send("flashcard não encontrado!")
//     }

//     return res.status(201).send(flashcardFind)
// }