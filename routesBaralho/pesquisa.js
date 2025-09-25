// import { baralho } from "./array"
import { Baralho } from "./schema.js";

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  }
  
export const pesqPorTitulo = async (titulo) => {
    try {
      const safeTitulo = escapeRegex(titulo);
      return await Baralho.find({ titulo: { $regex: safeTitulo, $options: "i" } }).exec();
    } catch (error) {
      console.error('Erro ao pesquisar baralho', error.message);
      throw error;
    }
}

// function pesqPorID(req, res) {-
//     const { id } = req.query

//     if(id.trim() === ""){
//         return res.status(404).send("pesquisa nula!")
//     }

//     const baralhoFind = baralho.findIndex((element) => element.id == id)

//     if(baralhoFind !== -1){
//         return res.status(201).send(baralho[baralhoFind])
//     }
//     return res.status(404).send("baralho não encontrado!")
// }

// function pesqPorTitulo(req, res) {
//     const { titulo } = req.query
//     if(titulo.trim() === ""){
//         return res.status(404).send("pesquisa nula!")
//     }
//     const baralhoFind = baralho.filter((element) => {
//         if(element.titulo.toLowerCase().trim() === titulo.toLowerCase().trim()){
//             return element
//         }
//     })
//     if(!baralhoFind){
//         return res.status(404).send("baralho não encontrado!")
//     }
//     return res.status(201).send(baralhoFind)
// }

// export { pesqPorID, pesqPorTitulo }
