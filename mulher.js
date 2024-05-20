const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request,response) {
response.json({
    nome:'Gabriela Melo',
    imagem:'https://media.licdn.com/dms/image/D4D03AQE7DsoUe-X7xg/profile-displayphoto-shrink_800_800/0/1691062331804?e=1721260800&v=beta&t=2VB4TvAHGoeAKMtf33qdnfS-6SQm0EMdkbM8WtfhgM0',
    minibio:'Especialista em Projetos e Inovação'

})

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher",mostraMulher))
app.listen(porta, mostraPorta)