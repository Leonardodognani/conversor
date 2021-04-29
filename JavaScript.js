function converterValor(){
    var valorConvertido = document.querySelector('#valor');
    var valorCotacao = 5.75;
   var valorConvertidoFinal = parseFloat(valorConvertido.value);
    var conversao = valorConvertidoFinal * valorCotacao;
    var conversaoDecimal=conversao.toFixed(2);
    mostrarValorNaTela(conversaoDecimal);
    valorCotacao.value="";
    valorConvertido.value="";
  }
  
  function mostrarValorNaTela(conversao){
    var mostrarValor = document.querySelector('#listaValor')
    var valorSaidaFinal ="<h2> R$ " + conversao +" Reais </h2>"
    mostrarValor.innerHTML = mostrarValor.innerHTML + valorSaidaFinal
  }