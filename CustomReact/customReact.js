function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.append(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)


// const  areactElement = React.createElement(
//     'a',
//     {href: 'https://google.com', target: '_blank'},
//     'click to visit google'
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App/>
// )