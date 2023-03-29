

async function getWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        console.log('O Metamask não está instalado.');
      }
}

async function loadContract() {
    return await new window.web3.eth.Contract([ 	{ 		"inputs": [ 			{ 				"internalType": "uint256", 				"name": "valor", 				"type": "uint256" 			} 		], 		"name": "setValor", 		"outputs": [], 		"stateMutability": "nonpayable", 		"type": "function" 	}, 	{ 		"inputs": [], 		"name": "getValor", 		"outputs": [ 			{ 				"internalType": "uint256", 				"name": "", 				"type": "uint256" 			} 		], 		"stateMutability": "view", 		"type": "function" 	} ], '0xDdFB7653E015b7fdc7cdF1cc6a3f329Bdce4c829');
}

async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];r
}

async function load() {
    await getWeb3();
    window.contract = await loadContract();   
}
 
async function getNetworkCurrent() {

    await getWeb3();
    const networkId = await web3.eth.net.getId();
    console.log(networkId);
    return networkId;
}  

getNetworkCurrent().then((networkId) => {
    // Verifica a rede Ethereum atualmente selecionada pelo usuário
if (networkId !== 5) {
    // Exibe uma mensagem de erro informando que o dapp não funciona nesta rede
    alert('Este dapp não funciona na rede Ethereum selecionada. Por favor, selecione a rede Goerli.');
}
else{
    alert('OK! Este dapp funciona na rede Goerli.');
}
  });







