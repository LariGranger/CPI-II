var numeroSecreto = parseInt(Math.random() * 101 - 1) + 1;

var numeroTentativas = 0;
var maxTentativas = 10;


while(numeroTentativas  < maxTentativas){
    var chute = prompt("Digite um número entre 1 e 100: ");
    numeroTentativas += 1;
    if(numeroSecreto == chute){
        alert("Você acertou");
        numeroTentativas = 10;
    }else{
        if(chute > numeroSecreto){
            alert(`Você errou! Seu chute foi maior que o número secreto! \n Tentativa número: ${numeroTentativas}`);
        }else if(chute < numeroSecreto){
            alert(`Você errou! Seu chute foi menor que o número secreto! \n Tentativa número: ${numeroTentativas}`);
    }
    }
}

    
    
    
    
    