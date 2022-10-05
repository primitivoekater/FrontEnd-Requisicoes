const cep = document.querySelector('#cep')
const cidade = document.querySelector('#cidade')
const rua = document.querySelector('#rua')
const numero = document.querySelector('#numero')

cep.addEventListener('change', function () {
    const resposta = fetch('https://viacep.com.br/ws/' + cep.value + '/json/')

    resposta.then(function (respostaFinal) {
        const promiseBody = respostaFinal.json()

        promiseBody.then(function (body) {
            cidade.value = body.localidade
            rua.value = body.logradouro
            numero.value = body.gia
            console.log(body)
        })

    })
})