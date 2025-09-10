let resultado;

function verificar_Resposta(perguntaUsuario) {
    let respostaUsuario = parseFloat(prompt(perguntaUsuario));
    while(isNaN(respostaUsuario) || respostaUsuario <= 0){
        respostaUsuario = parseFloat(prompt(perguntaUsuario + '\n Aceita-se somente números e que sejam maiores que 0'));
    }
    return respostaUsuario;
}

let qtdNumerosASortear = verificar_Resposta('Diga quantos números serão sorteados: ');
let inicioIntervalo = verificar_Resposta('Diga a partir de qual número será gerado os números aleatórios: ');
let fimIntervalo = verificar_Resposta('Diga qual será o fim desse intervalo');

let listaNumerosSorteados = [];

for (i = 0; i < qtdNumerosASortear; i++) {
    resultado = Math.floor(Math.random() * fimIntervalo + inicioIntervalo);
    console.log(resultado);
    listaNumerosSorteados[i] = resultado;
}
console.log(listaNumerosSorteados);
alert(`Resultado do Valor é ${listaNumerosSorteados}`);

