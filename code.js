let qtdNumerosASortear = parseFloat(prompt('Diga quantos números serão sorteados: '));
let inicioIntervalo = parseFloat(prompt('Diga a partir de qual número será gerado os números aleatórios: '));
let fimIntervalo = parseFloat(prompt('Diga qual será o fim desse intervalo'));
let resultado;

let listaNumerosSorteados = [];

for (i = 0; i < qtdNumerosASortear; i++) {
    resultado = Math.floor(Math.random() * fimIntervalo + inicioIntervalo);
    console.log(resultado);
    listaNumerosSorteados[i] = resultado;
}
console.log(listaNumerosSorteados);
alert(`Resultado do Valor é ${listaNumerosSorteados}`);

