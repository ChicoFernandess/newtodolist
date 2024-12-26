const listArray = [];
let todolist = localStorage.getItem("todolistarray") || [];
let newArray = todolist.split(',');

console.log(todolist);

document.addEventListener("DOMContentLoaded", () => {
    newArray.forEach(item => getList(item));
});

function getText(){
    const text = document.getElementById("listtext").value;
    console.log(text);
    newArray.push(text); // now we push the new value to the array from the
    console.log(listArray);

    localStorage.setItem("todolistarray", newArray);

    getList(text);
}

function getList(newItem){
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.textContent = newItem;
    ul.appendChild(li);
}