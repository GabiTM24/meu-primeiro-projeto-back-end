const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
    nome:'Gabriela Melo',
    imagem:'https://media.licdn.com/dms/image/D4D03AQE7DsoUe-X7xg/profile-displayphoto-shrink_800_800/0/1691062331804?e=1721260800&v=beta&t=2VB4TvAHGoeAKMtf33qdnfS-6SQm0EMdkbM8WtfhgM0',
    minibio:'Especialista em Projetos e Inovação'
    },
    {
    nome:'Lucimara Melo',
    imagem:'https://media.licdn.com/dms/image/D4D16AQG93xqCxxM4Hg/profile-displaybackgroundimage-shrink_350_1400/0/1684098139004?e=1721260800&v=beta&t=rvJLATw6ps33jwmBuY2PijkW2GW3FxiEXzXRrmmavP8',
    minibio:'Tecnólogo em Gestão Ambiental'
    },
    {
    nome:'Letícia Marielle',
    imagem:'https://media.licdn.com/dms/image/D4E16AQGs5gjsFnb80Q/profile-displaybackgroundimage-shrink_350_1400/0/1710356004985?e=1721260800&v=beta&t=C1Zp585dpOIHw24Jufz1j7CNOG9upD0gDAiUlPfUpN0',
    minibio:'Scrum Master' 
    }
]

function mostraMulheres(request, response) {
response.json (mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres',mostraMulheres))
app.listen(porta, mostraPorta)