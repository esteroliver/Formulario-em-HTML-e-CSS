const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Contato = new Schema({
    nome: {
        type: String,
        // Se o "required" tiver valor "true" então é obrigatorio que usuário insira a informação
        // Você pode fazer uma validação para evitar que o usuário deixe em branco
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }
})

mongoose.model('contato', Contato)