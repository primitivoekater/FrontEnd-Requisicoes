const pikamon = document.querySelector('#pukemon')
const nome = document.querySelector('.nome')
const img = document.querySelector('.img')


pikamon.addEventListener('change', function () {
    const promisse = fetch('https://pokeapi.co/api/v2/pokemon/' + pikamon.value)

    promisse.then(function (resposta) {

        const Pbody = resposta.json()

        Pbody.then(function (body) {
            nome.textContent = body.name
            img.src = body.sprites.front_default
        })
    })
})