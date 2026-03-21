window.addEventListener('load', e => {
    /**
     * @param {String} x 
     * @returns {String}
     */
    function encodeentities(x) {
        return x.replaceAll('&', '&amp;')
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;')
                .replaceAll('"', '&quot;')
                .replaceAll('\'', '&apos;')
                .replaceAll('\n', '<br>')
    }

    const console_element = document.getElementById('console')
    /**
     * 
     * @param {String} color 
     * @param  {...any} v 
     */
    function print(color, ...v) {
        const div = document.createElement('div')
        div.style.color = `var(--color-${color})`
        const str = v.map(v => encodeentities(v.toString())).join(' ')
        div.innerHTML = str
        console_element.append(div)

        console_element.scrollTop = console_element.scrollHeight
    }

    window.console = {
        ...window.console,

        log: (...v) => print('green', ...v),
        error: (...v) => print('red', ...v),
        warn: (...v) => print('brown', ...v),
        info: (...v) => print('blue', ...v),

        assert: (c, ...v) => { if(!c) console.error('Assertion failed:', ...v) },

        clear: () => {console_element.innerHTML = ''; return undefined}
    }

    /**
     * @param {String} command 
     */
    function runCommand(command) {
        try {
            print('lightgreen', '>', command)
            const v = eval(command)
            if(v == undefined) print('cyan', '<', 'undefined')
            else print('cyan', '<', v)
        } catch(e) {
            console.error(e)
        }
    }

    /**
     * @type {HTMLFormElement}
     */
    const form = document.getElementById('form')
    form.addEventListener('submit', e => {
        e.preventDefault()

        const {command} = form.elements
        const {value} = command
        command.value = ''

        if(value) runCommand(value)
    })

    const {search} = window.location
    if(search.startsWith('?')) {
        const queries = Object.fromEntries(search.substring(1).split('&').map(v => v.split('=').map(
            v => decodeURIComponent(v)
                .replaceAll('+', ' ')
        )))
        const {command} = queries
        if(command)
            runCommand(command)
    }
})
