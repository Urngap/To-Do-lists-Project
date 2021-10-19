class Todo {
    constructor(classSelector = '') {
        this.todo = []
        this.classSelector = classSelector
        document.querySelector(this.classSelector + " button.save-button").addEventListener(
            "click", () => {
                this.save(document.querySelector(this.classSelector + " #todo").value)
                this.init()
                this.deleteInput()
        })

    }

    init() {
        this.show()
        this.addEvent()
        //console.log(this.todo)
    }

    save(value) {
        this.todo.push(value)
    }

    show() {
        var loopTemplate = ''
        this.todo.forEach((value, index) => {
            loopTemplate +=
            `<li class = "index-${index}">
                 <input class="check" type="checkbox">
                 <span class="todo-label">${value}</span>
                 <button class="delete-button">delete</button>
             </li>`
        });
        document.querySelector(this.classSelector + " .todo-box .lists").innerHTML = loopTemplate
    }

    addEvent() {
        this.todo.forEach((value, index) => {
            let checkIndex = document.querySelector(`${this.classSelector} .index-${index} .check`)
            let labelIndex = document.querySelector(`${this.classSelector} .index-${index} .todo-label`)
            let deleteIndex = document.querySelector(`${this.classSelector} .index-${index} .delete-button`)
            checkIndex.addEventListener('change', () => {
                if(checkIndex.checked) {
                    labelIndex.style.textDecoration = 'line-through'
                }
                else {
                    labelIndex.style.textDecoration = 'none'
                }
            })
            deleteIndex.addEventListener('click', () => {
                this.todo.splice(index, 1 )
                this.init()
            })
        })
    }
    deleteInput(value) {
        document.querySelector(this.classSelector + " #todo").value = ''
    }
}



