const coin = document.querySelector('#moedinha')
const valor = document.querySelector('.valor')
coin.addEventListener('change', function () {
    const PromessaResposta = fetch('https://www.mercadobitcoin.net/api/' + coin.value + '/ticker/')
    PromessaResposta.then(function (resposta) {
        const respostaBody = resposta.json()

        respostaBody.then(function (body) {
            valor.textContent = Number(body.ticker.high).toFixed(2)
        })
    })
})