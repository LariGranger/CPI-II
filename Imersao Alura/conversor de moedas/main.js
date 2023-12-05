var cotacaoDoDolar = 5.32;
var cotacaoDoEuro = 5.25;
var nome = prompt("Digite seu nome: ")
var escolha= prompt("Digite 1 para converter de Dolar para Real e 2 de Euro para Real: ");


if (escolha == 1) {
    var valorEmDolar = prompt("Digite o valor em dolar: ");
    var valorEmReal = valorEmDolar * cotacaoDoDolar;
    valorEmReal = valorEmReal.toFixed(2);

    alert(`Olá, ${nome}! Valor convertido em real: R$${valorEmReal}`);
}else if(escolha == 2){
    var valorEmEuro = prompt("Digite o valor em euro: ");
    var valorEmReal = valorEmEuro * cotacaoDoEuro;
    valorEmReal = valorEmReal.toFixed(2);

    alert(`Olá, ${nome}! Valor convertido em real: R$${valorEmReal}`);
}

