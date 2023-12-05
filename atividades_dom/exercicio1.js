//retorna se o valor for numerico
function ehDigito(caractere) {
  return caractere >= "0" && caractere <= "9";
}
//verifica se o telefone está correto
function verificaTelefone(campo) {
  let telef = campo.value;
  for (i = 0; i < telef.length; i++)
    if (!ehDigito(telef.charAt(i))) {
        document.addEventListener("erro", clica);
      document.getElementById("erro").innerHTML =
        "Caractere '" + telef.charAt(i) + "' inválido: deve ser número!";
      campo.focus();
      return false;
    }
  return true;
}
