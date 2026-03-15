window.addEventListener('load', e => {
    const easteregg = document.getElementById('easteregg')
    easteregg.addEventListener('click', e => {
        const doot = new Audio('/res/sounds/doot.mp3')
        doot.play()
    })

    const xhttp_subtitle = new XMLHttpRequest()
    xhttp_subtitle.open('GET', '/res/subtitles.txt')
    xhttp_subtitle.addEventListener('load', e => {
        const subtitles = xhttp_subtitle.responseText.split('\n')
        const idx = Math.floor(Math.random() * subtitles.length)
        const subtitle = subtitles[idx]
        const subtitle_div = document.getElementById('subtitle')
        subtitle_div.innerHTML = subtitle
    })
    xhttp_subtitle.send()
})
