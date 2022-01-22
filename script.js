const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = input.value

    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const todoEl = document.createElement('li')
        if (todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })

        todosUL.appendChild(todoEl)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}
const header = document.querySelector('.nav');
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.scrollY > header.offsetHeight + 55) {
        header.classList.add("active")
    } else {
        header.classList.remove("active")
    }

}

var like = document.querySelector("#like");
var dislike = document.querySelector("#dislike");
var likeDislike = document.getElementsByClassName("fa");

var likes = document.querySelector("#icons");
var feed = document.querySelector("#feed")
var thankYou = document.querySelector("#thankyou")

var yes = document.querySelector("#yes");
var no = document.querySelector("#no")

window.addEventListener("click", hideLike);
likeDislike.addEventListener("hover", yesOrNo);

function yesOrNo() {
    if (like) {
        yes.style.display = "block";
    } else if (dislike) {
        no.style.display = "block"
    } else { "" }
}

function hideLike() {
    likes.style.display = "none";
    feed.style.display = "none";
    thankYou.style.display = "block";
}