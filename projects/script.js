window.addEventListener('load', e => {
    const projects = document.getElementById('projects')
    
    /**
     * @param {Element} item 
     */
    function parseItem(item) {
        const title_tag = item.querySelector('title')
        const desc_tag = item.querySelector('description')
        const link_tag = item.querySelector('link')

        const title = title_tag.innerHTML
        const desc = desc_tag.innerHTML
        const link = link_tag.innerHTML

        return {title: title, desc: desc, link: link}
    }

    /**
     * @param {{title: String, desc: String, link: String}} item 
     */
    function itemToDOM(item) {
        const div = document.createElement('div')

        const title = document.createElement('a')
        title.innerText = item.title
        title.href = item.link
        title.target = '_blank'

        const desc = document.createElement('div')
        desc.innerText = item.desc

        div.append(title, desc)
        return div
    }

    const xhttp = new XMLHttpRequest()
    xhttp.open('GET', '/projects/projects.rss')
    xhttp.addEventListener('load', e => {
        const xml = xhttp.responseXML
        const items = xml.getElementsByTagName('item')
        projects.innerHTML = ''
        for(const i of items) {
            const item = parseItem(i)
            const dom = itemToDOM(item)
            projects.append(dom)
        }
    })
    xhttp.send()
})
