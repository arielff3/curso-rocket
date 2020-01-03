let input = document.querySelector('input')
let ul = document.querySelector('ul')

function list() {
    axios.get(`https://api.github.com/users/${input.value}/repos`)
        .then(resolve => {
            const {data} = resolve
            data.forEach(e => {
                let li = document.createElement('li')
                let {name} = e
                let text = document.createTextNode(name)
                li.appendChild(text)
                ul.appendChild(li)

            });
        })
        .catch(error => console.log(error))
}
