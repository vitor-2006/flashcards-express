// import { baralho } from "./array.js"
import { Baralho } from "./schema.js"

export const getBaralho = async (req, res) => {
    try {
        return await Baralho.find()
    } catch (error) {
        console.log('erro ao buscar os baralhos', error.message)
        throw error
    }
}

// export function getBaralho (req, res) {
//     if(baralho.length === 0){
//         return res.status(404).send("nenhum baralho registrado!")
//     }
//     return res.status(201).send(baralho)
// }