window.addEventListener('load', e => {
    const topbar_container = document.getElementById('topbar-container')
    const topbar = document.getElementById('topbar')
    
    topbar_container.addEventListener('mouseover', e => {
        topbar.style.height = '2em'
    })

    topbar_container.addEventListener('mouseleave', e => {
        topbar.style.height = ''
    })

    const path = window.location.pathname
    const dir = path.substring(0, path.lastIndexOf('/'))

    topbar.innerHTML = `
        <a class="white-hi" href="/"><b>JakubKwantowy</b>:~${dir}$</a>
        <div id="topbar-divider"></div>
        <a class="black" href="https://github.com/JakubKwantowy" target="_blank">My Github</a>
        <div></div>
        <a class="black" href="/projects/">My Projects</a>
        <div></div>
    `
})
