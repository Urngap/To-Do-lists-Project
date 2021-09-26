//ต้องเติมthisด้วยเนื่องจากอยู่ในclass <=
class Todo {
    constructor(classSelector = '') {
        this.todo = []
        this.classSelector = classSelector
        document.querySelector(this.classSelector + " button.save-button").addEventListener(
            "click", () => {
                this.save(document.querySelector(this.classSelector + " #todo").value)
                this.init()
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


}


//ส่วนนี้คือที่คิด ข้างบนคือจัดรูปแล้ว
// var todo = []
// var saveButtonSelector = document.querySelector("button.save-button")
// var inputSelector = document.querySelector("#todo")
// var listsSelector = document.querySelector(".todo-box .lists")
//
//
//
// function savingButton(value) {
//     todo.push(value)
// }
//
// function showTodo() {
//     var loopTemplate = ''
//     todo.forEach((value, index) => {
//         loopTemplate +=
//         `<li class = "index-${index}">
//              <input class="check" type="checkbox">
//              <span class="todo-label">${value}</span>
//              <button class="delete-button">delete</button>
//          </li>`
//     });
//     listsSelector.innerHTML = loopTemplate
//
//
//     //วิธีนี้ก็ใช้ได้
//     //todo = ['asas,qwerty'] // todo.length = 2-1 = 1
//     // value = todo[1] = qwerty
//     // let index = todo.length - 1
//     // let value = todo[index]
//     // listsSelector.innerHTML +=  `<li>
//     //          <input type="checkbox">
//     //          <span class="todo-label">${each}</span>
//     //          <button class="delete-button">delete</button>
//     //      </li>`
//
//
//     //วิธีนี้ก็ใช้ได้
//     // var loopTemplate = ""
//     // for(let each of todo) {
//     //     loopTemplate += `<li>
//     //         <input type="checkbox">
//     //         <span class="todo-label">${each}</span>
//     //         <button class="delete-button">delete</button>
//     //     </li>`
//     // }
//     // listsSelector.innerHTML = loopTemplate
//
// }
//
// function addEventForTodo() {
//     todo.forEach((value, index) => {
//         let checkIndex = document.querySelector(`.index-${index} .check`)
//         let labelIndex = document.querySelector(`.index-${index} .todo-label`)
//         let deleteIndex = document.querySelector(`.index-${index} .delete-button`)
//         checkIndex.addEventListener('change', () => {
//             if(checkIndex.checked) {
//                 labelIndex.style.textDecoration = 'line-through'
//             }
//             else {
//                 labelIndex.style.textDecoration = 'none'
//             }
//         })
//         deleteIndex.addEventListener('click', () => {
//             todo.splice(index, 1 )
//             startTodo()
//         })
//     })
// }
//
// function startTodo() {
//     showTodo()
//     addEventForTodo()
//     console.log(todo)
// }
//
// saveButtonSelector.addEventListener("click", () => {
//
// savingButton(inputSelector.value)
// startTodo()
// })
