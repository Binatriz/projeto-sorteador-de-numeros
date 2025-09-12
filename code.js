let resultado;

function sortear() {

    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseFloat(document.getElementById("de").value);
    let ate = parseFloat(document.getElementById("ate").value);

    function verificar_Resposta(verificar_Variavel, pergunta_Usuario) {
        let respostaUsuario = verificar_Variavel(pergunta_Usuario);
        while (isNaN(respostaUsuario) || respostaUsuario <= 0) {
            respostaUsuario = verificar_Variavel(pergunta_Usuario + '\n Aceita-se somente números e que sejam maiores que 0');
        }
        return respostaUsuario;
    }

    let qtdNumerosASortear = verificar_Resposta(parseInt, quantidade);
    let inicioIntervalo = verificar_Resposta(parseFloat, de);
    let fimIntervalo = verificar_Resposta(parseFloat, ate);

    let listaNumerosSorteados = [];

    while (fimIntervalo < inicioIntervalo) {
        fimIntervalo = verificar_Resposta(parseFloat, ate);
    }
    for (i = 0; i < qtdNumerosASortear; i++) {
        resultado = Math.floor(Math.random() * (fimIntervalo - inicioIntervalo) + 1) + inicioIntervalo;
        listaNumerosSorteados[i] = resultado;
    }

    console.log(listaNumerosSorteados);
    let numerosSorteados = '';
    for (i = 0; i < listaNumerosSorteados.length; i++) {
        numerosSorteados += ('<br>' + listaNumerosSorteados[i] + '<br>');
    }
    let resposta = document.getElementById("resultado");
    resposta.innerHTML = (`Resultado do sorteio é: ${numerosSorteados}`);
}