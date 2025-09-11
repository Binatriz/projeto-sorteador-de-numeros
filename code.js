let resultado;

function sortear() {

    let quantidade;

    function verificar_Resposta(verificar_Variavel, pergunta_Usuario) {
        let respostaUsuario = verificar_Variavel(prompt(pergunta_Usuario));
        while (isNaN(respostaUsuario) || respostaUsuario <= 0) {
            respostaUsuario = verificar_Variavel(prompt(pergunta_Usuario + '\n Aceita-se somente números e que sejam maiores que 0'));
        }
        return respostaUsuario;
    }
    let qtdNumerosASortear = verificar_Resposta(parseInt, 'Diga quantos números serão sorteados: ');
    let inicioIntervalo = verificar_Resposta(parseFloat, 'Diga a partir de qual número será gerado os números aleatórios: ');
    let fimIntervalo = verificar_Resposta(parseFloat, 'Diga qual será o fim desse intervalo');

    let listaNumerosSorteados = [];

    while (fimIntervalo < inicioIntervalo) {
        fimIntervalo = verificar_Resposta(parseFloat, 'Diga qual será o fim desse intervalo');
    }
    console.log(`A quantidade de: ${qtdNumerosASortear}, o inicio do intervalo é: ${inicioIntervalo} e o fim do intervalo é: ${fimIntervalo}`);
    for (i = 0; i < qtdNumerosASortear; i++) {
        resultado = Math.floor(Math.random() * (fimIntervalo - inicioIntervalo) + 1) + inicioIntervalo;
        listaNumerosSorteados[i] = resultado;
    }

    console.log(listaNumerosSorteados);
    let numerosSorteados = '';
    for (i = 0; i < listaNumerosSorteados.length; i++) {
        numerosSorteados += ('<br>' + listaNumerosSorteados[i] + '<br>');
    }
    console.log(`2 - A quantidade de: ${qtdNumerosASortear}, o inicio do intervalo é: ${inicioIntervalo} e o fim do intervalo é: ${fimIntervalo}`);
    document.write(`Resultado do sorteio é: ${numerosSorteados}`);
}