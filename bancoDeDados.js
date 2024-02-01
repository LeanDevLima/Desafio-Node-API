const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com o banco de dados iniciou')

        //await mongoose.connect(process.env.MONGO_URL)
        await mongoose.connect('mongodb+srv://leandersondevlima:<8lsHkq5cJFE9HL0g>@clustermulheres.8lbmiby.mongodb.net/?retryWrites=true&w=majority')


        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados