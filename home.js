
let Hobbies = document.getElementById('Hobbies')
let Quien = document.getElementById('Quien')

hobbiesDesc.hidden = true
quienDesc.hidden = true

Hobbies.onclick = function () {
    hobbiesDesc.hidden = false
    quienDesc.hidden = true
}

Quien.onclick = function () {
    hobbiesDesc.hidden = true
    quienDesc.hidden = false
}