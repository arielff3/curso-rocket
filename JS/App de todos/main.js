let ul = document.querySelector('#app ul')
let input = document.querySelector('input')
let button = document.querySelector('button')


let todos = JSON.parse(localStorage.getItem('list_todos'))

function renderTodos(){
    ul.innerHTML = ''
    todos.forEach((e, index) => {
        let li = document.createElement('li')
        let text = document.createTextNode(e)
        

        let a = document.createElement('a')
        a.setAttribute('href','#')
        a.setAttribute('onclick', `excluir(${index})`)
        
        let textA = document.createTextNode('Excluir')
        a.appendChild(textA)

        li.appendChild(text)
        li.appendChild(a)

        ul.appendChild(li)
    })
}

function adicionarTodo() {
    let valor = input.value
    console.log(valor)
    if (valor === ''){
        alert('Digite algo')
    }else {
        todos.push(valor)
        input.value = ''
        renderTodos()
        localstrogeSave()
    }
}

function excluir(pos) {
    todos.splice(pos, 1)
    renderTodos()
    localstrogeSave()
}

function localstrogeSave() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

renderTodos()