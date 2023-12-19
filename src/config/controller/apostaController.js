import apostaModels from "../../models/Apostas.js";

class ApostaController {

    static async listarApostas (req, res) {
        try{
            const listaApostas = await apostaModels.find({});
            res.status(200).json(listaApostas);
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Houve uma falha na conexão!`})
        }
    };

    static async listarApostaPorId (req, res) {
        try{
            const id = req.params.id;
            const apostaEncontrada = await apostaModels.findById(id);
            res.status(200).json(apostaEncontrada);
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Houve uma falha na conexão!`})
        }
    };

    static async cadastrarAposta (req, res) {
        try{
            const novaAposta = await apostaModels.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", apostaModels:novaAposta});
        }catch(erro){
            res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar a nova aposta`})
        }
    };

    static async atualizarAposta (req, res) {
        try{
            const id = req.params.id;
            await apostaModels.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Aposta atualizada com sucesso"});
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Houve uma falha na conexão!`})
        }
    };

    static async excluirAposta (req, res) {
        try{
            const id = req.params.id;
            await apostaModels.findByIdAndDelete(id);
            res.status(200).json({ message: "Aposta excluida com sucesso"});
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - Houve uma falha na conexão!`})
        }
    };
};

export default ApostaController;