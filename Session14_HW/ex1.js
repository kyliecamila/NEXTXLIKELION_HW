const $ulElement = document.querySelector('ul');

$ulElement.addEventListener("click",(event)=>{
    const $target = event.target;
    if($target.classList.contains('close')){
        const $parentTarget = $target.parentElement;
        $parentTarget.style.display = "none";
        console.dir($parentTarget)
        const deleteItem = $parentTarget.childNodes[1].innerText;
        deleteTodoList('todoList', deleteItem);
    }
    $target.classList.toggle('checked');
})

const $darkmode = document.querySelector('.darkmode');
const header = document.querySelector('.header');
const list = document.querySelectorAll('li');
$darkmode.addEventListener("click",(event)=>{
    header.classList.toggle('darkmode');
    if (header.classList.contains('darkmode')){
        header.style.background = "black";
        header.style.color = "white";
        list.style.background = "pink";
    }
    else{
        header.style.background = "#f44336";
        header.style.color = "black";
        list.style.background = "white";

    }
})

function newElement() {
    const inputValue = document.getElementById("myInput").value;
    const $liElement = `
        <li>
            <span>${inputValue}</span>
            <span class="close">&#215;</span>
        </li>
    `

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $ulElement.insertAdjacentHTML('beforeend', $liElement);
        addTodoList('todoList', inputValue)
    }
    document.getElementById("myInput").value = "";
}


function init() {
    let todoList = getTodoList('todoList');
    for(let i=0; i<todoList.length; i++){
        $liElement = `
            <li>
                ${todoList[i]}
                <span class="close">&#215;</span>
            </li>
        `
        $ulElement.insertAdjacentHTML('beforeend', $liElement);
    }
}

function getTodoList(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key).split(',') : [];
}

function addTodoList(key, value) {
    const todoList = getTodoList(key)
    return localStorage.setItem(key,[...todoList, value])
}

function deleteTodoList(key,value) {
    const todoList = getTodoList(key)
    return localStorage.setItem(key,todoList.filter(todo => todo !== value))
}

init()


///////////////////////////////////////////////////////////////////////////////////////////////////////


// const $ulElement = document.querySelector('ul');

// $ulElement.addEventListener("click", (event) =>{
//     const $target = event.target;
//     if($target.classList.contains('close')){
//         const $parentTarget = $target.parentElement;
//         $parentTarget.style.display = "none";
//     }
//     $target.classList.toggle('checked');
// })

// function newElement() {
//    // let $liElement = document.createElement("li");
   
//    //let $textElement = document.createElement("span");
//     const inputValue = document.getElementById("myInput").value;
//     // $textElement.innerText = inputValue;
//     const $liElement = `
//     <li>
//         <span> ${inputValue}</span>
//         <span class="close">x</span>
//     </li>
//     `


//     let $closeText = document.getElementById("myInput").value;
   

//    // let $closeElement = document.createElement("span");
   

//     if (inputValue === '') {
//         alert("You must write something!");
//     } else {
//         $ulElement.insertAdjacentHTML('beforeend',$liElement)
//         //?????? ???????????? ?????? ??????
//     }
//     document.getElementById("myInput").value = "";
// }

// // ????????? ??????

// //local storage?????? ->????????? ????????? li ?????? ???????????????
// function init() {
//    const todoList = getTodoList('todoList')
//    for (let i=0; i<todoList.length; i++){
//     const $liElement.insertAdjacentHTML('beforeend', `
//     <li>
//         <span> ${inputValue}</span>
//         <span class="close">x</span>
//     </li>
//     )????????????
//    }


// }


// // ?????? ??????????????? key?????? ?????? value ?????? ??????
// function getTodoList(key) {
//     // asdf,asdf,????????????
//     if(localStorage.getItem(key)){
//         return localStorage.getItem(key) ? localStorage.getItem(key).split(',';)
//     }
//     // return localStorage.getItem(key).split(',');
// }

// //?????? ?????? ????????? ??? ??????

// function addTodoList(value) {
    
//     const existData = getTodoList()
//     // existData.push(value)
//     // localStorage.setItem(key, existData)
//     //spread operator
//     return localStorate.setItem(key, [...todoList, value])
// }

// //key -->????????? ?????? ?????????????????? ????????? -->array?????? value??? ???????????? ???
// function deleteTodoLIst(value) {
//     const existData = getTodoList()
//     const filteredData = []
//     for(let i=0;i < existData.length ; i ++){
//         const data = existData[i]
//         if (data !== value){
//             filteredData.push(data)
//         }
//     }
//     localStorage.setItem('key', filteredData)
// }



