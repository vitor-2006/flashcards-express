// import { baralho, } from "./array.js";
// import { verificarTitulo } from "./verificar.js";
import { Baralho } from "./schema.js"

export const updateBaralho = async (id, titulo) => {
    try {
        console.log(Baralho)
        const updatedBaralho = await Baralho.findByIdAndUpdate(
            id,
            { titulo },
            { new:true, runValidators:true }
        )
        return updatedBaralho
    } catch (error) {
        console.error('Erro ao atualizar o baralho:', error.message)
        throw error
    }
}

// export function putBaralho (req, res) {
//     const { id } = req.params

//     const tituloFind = verificarTitulo(req.body.titulo)
//     if(!tituloFind){
//         return res.status(400).send("título inválido!")
//     }

//     baralho.find((element) => {
//         if(element.id === parseInt(id)){
//             let update = req.body
//             element.titulo = update.titulo
//             return res.status(200).send("baralho editado com sucesso!")
//         }
//     })
//     return res.status(404).send("baralho não encontrado!")
// }