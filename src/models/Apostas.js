import mongoose from "mongoose";

const apostasSchema = new mongoose.Schema({
    id:{type: mongoose.Schema.Types.ObjectId},
    Jogo:{type: String, required: true},
    Entrada:{type: String},
    Mercado:{type: String},
    Liga:{type: String},
    Valor_Entrada:{type: Number}
}, {versionKey: false});

const apostaModels = mongoose.model("Apostas", apostasSchema);

export default apostaModels;