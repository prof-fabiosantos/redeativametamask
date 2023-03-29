// Referência aos elementos da página HTML
const valorInput = document.getElementById('valor');
const definirValorBtn = document.getElementById('definir-valor');
const obterValorBtn = document.getElementById('obter-valor');
const valorNaTela = document.getElementById('valor-na-tela');

async function inserirValor(valor){    
    // Define o valor na blockchain
    window.contract = load();   
    const account = await getCurrentAccount();
    const network = await getNetworkCurrent();
    if (network == 5){
        window.contract.methods.setValor(valor).send({ from: account })
        .on('receipt', (receipt) => {
        alert('Valor definido com sucesso na blockchain!');
        });
    }else{
        alert('Não pode inserir o Valor nessa rede!');
    }

}

// Define o valor na blockchain quando o botão 'Definir valor' é clicado
definirValorBtn.addEventListener('click', () => {
  const valor = valorInput.value;  
  inserirValor(valor);  
});

// Obtém o valor da blockchain quando o botão 'Obter valor' é clicado
obterValorBtn.addEventListener('click', () => {
    // Obtém o valor da blockchain
    window.contract.methods.getValor().call()
    .then((valor) => {
    valorNaTela.innerText = valor;
    });
 });

// Adiciona um ouvinte para o evento chainChanged do Metamask
window.ethereum.on('chainChanged', () => {   
      window.location.reload();
          
  });

