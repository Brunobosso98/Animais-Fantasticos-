export default function fetchBtc(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / json.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}

// Utilizando async
// async function fetchBtc(url) {
//   try {
//     const btcResponse = await fetch("https://blockchain.info/ticker");
//     const btcJSON = await btcResponse.json();
//     const btcPrecos = document.querySelector(".btc-preco");
//     btcPrecos.innerText = (100 / btcJSON.BRL.buy).toFixed(4);

//     console.log(btcPrecos);
//   } catch (erro) {
//     console.log(erro);
//   }
// }
