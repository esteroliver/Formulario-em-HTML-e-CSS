// Express para a construção de rotas
const express = require('express');
// tu podes por a constante express dentro de outra constante ou variavél (É o comum)
const app = express()
const path = require('path')


// Configurações
    // CSS
    // Para o CSS funcionar com o express é necessário que vc indique a pasta "public" é estática
    // Assim ele vai buscar o arquivo na pasta "public"
        app.use(express.static(__dirname + '/public')) 


//Essa é a rota para a página principal do teu app
app.get('/',(requisicao,resposta)=>{
    // Aqui o servidor vai enviar para ti uma mensagem ou um arquivo
    resposta.sendFile(path.join(__dirname, '/Codigo/codigo.html'));
})


// Essa função vai fazer com que teu app rode na sua máquina local. 8080 pe tipo o codigo do lugar reservado
app.listen(8080, ()=>{
    // É legal colocar uma função com um console.log() para a gente ver se está rodando bem
    console.log('Está funcionando bem!!!')

    // Para ver funcionando digite no terminal node index.js
    // Depois digite em seu navegador na URL do teu navegador localhost:8080
})