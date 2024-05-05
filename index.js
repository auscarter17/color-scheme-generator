// script

let seedColor = ''
let mode = ''

document.getElementById('get-color-btn').addEventListener('click', function() {
    seedColor = document.getElementById('color-picker').value
    let seedColorFormatted = seedColor.slice(1)
    mode = document.getElementById('modes').value

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColorFormatted}&mode=${mode}`)
        .then (res => res.json())
        .then (data => {

    document.getElementById('color1').style.backgroundColor = seedColor
    document.getElementById('color2').style.backgroundColor = data.colors[0].hex.value
    document.getElementById('color3').style.backgroundColor = data.colors[1].hex.value
    document.getElementById('color4').style.backgroundColor = data.colors[2].hex.value
    document.getElementById('color5').style.backgroundColor = data.colors[3].hex.value
    document.getElementById('code1').textContent = seedColor
    document.getElementById('code2').textContent = data.colors[0].hex.value
    document.getElementById('code3').textContent = data.colors[1].hex.value
    document.getElementById('code4').textContent = data.colors[2].hex.value
    document.getElementById('code5').textContent = data.colors[3].hex.value
        })
})