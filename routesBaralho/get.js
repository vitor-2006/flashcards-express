import { baralho } from "./array.js"

export function getBaralho (req, res) {
    if(baralho.length === 0){
        return res.status(404).send("nenhum baralho registrado!")
    }
    return res.status(201).send(baralho)
}