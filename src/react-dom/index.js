export default {
    render(option, target) {
        const ele = renderDom(option)

        target.appendChild(ele)
    }
}

function renderDom (option) {
    const { tag, attrs, children } = option
    const fragementDom = document.createElement(tag)

    attrs && Object.keys(attrs).forEach(item => {
        fragementDom[item] = attrs[item]
    });

    for(let i = 0; i < children.length; i++) {
        if(typeof children[i] !== 'object') {
            fragementDom.innerHTML += children[i]
        } else {
            fragementDom.appendChild(renderDom(children[i]))
        }
    }

    return fragementDom
}