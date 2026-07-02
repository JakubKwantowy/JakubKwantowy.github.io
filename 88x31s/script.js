window.addEventListener('load', e => {
    const cat = document.getElementById('cat')

    const the88x31s = [
        '<a href="https://JakubKwantowy.github.io/" target="_blank"><img src="https://JakubKwantowy.github.io/res/88x31/jkw.gif" alt="JakubKwantowy"></a>',
        '<img src="https://JakubKwantowy.github.io/res/88x31/doom.gif" alt="DooM">'
    ]

    for(const an88x31 of the88x31s) {
        const div = document.createElement('div')
        div.style.padding = '0.5em'
        div.innerText = an88x31
        div.innerHTML += ` ${an88x31}`
        cat.append(div)
    }
})
