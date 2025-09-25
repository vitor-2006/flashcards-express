import mongoose from "mongoose";

const BaralhoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    }
})

export const Baralho = mongoose.model('baralho', BaralhoSchema)

// baralho = []

// idGen = {
//     value: 100
// }

// export { baralho, idGen }