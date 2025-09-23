import { baralho, idGen } from "./array.js";
import { verificarTitulo } from "./verificar.js";

export function postBaralho(req, res) {
    const tituloFind = verificarTitulo(req.body.titulo)
    if(!tituloFind){
        return res.status(400).send("título inválido!")
    }

    const novoBaralho = 
        {
        'titulo': req.body.titulo,
        'id': idGen.value
        }
    idGen.value++
    baralho.push(novoBaralho)
    return res.status(200).send('baralho registrado!')
}