alert('Tente adivinhar o número');

let numeroEscolhido = 29;

let chuteNumero = prompt('Insira aqui o número');

if (numeroEscolhido == chuteNumero) {
    alert('Acertou');
}else{
    alert('errou');
    while (chuteNumero != numeroEscolhido) {
        let chuteNumero = prompt('Errou tente de novo');
    }
};