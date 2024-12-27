const listArray = [];
let todolist = localStorage.getItem("todolistarray");
// let newArray = todolist.split(',');
let newArray = todolist ? todolist.split(',') : []; // if todolist is empty inicialize newArrray with empty array so it doesnt throw error if local storage is empty

console.log(todolist);

document.addEventListener("DOMContentLoaded", () => {
    if (newArray.length > 0) { // Check if newArray is not empty
        newArray.forEach(item => getList(item));
    }
});

function getText(){
    const text = document.getElementById("listtext").value;
    console.log(text);
    newArray.push(text); // now we push the new value to the array
    console.log(listArray);

    localStorage.setItem("todolistarray", newArray); // save the array values in the local storage

    getList(text);
}

function getList(newItem){
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.textContent = newItem;

    const icon = document.createElement("span");
    icon.textContent = " delete";
    icon.style.color = "red";
    icon.style.cursor = "pointer";
 
    li.appendChild(icon);
 
    ul.appendChild(li);
 
    // click event to remove li from the dom
    icon.addEventListener("click", () => {
         li.remove(); 

         // Find the index of the item in the array and remove it
        const index = newArray.indexOf(newItem);
        if (index > -1) {
            newArray.splice(index, 1); // Remove the item from the array
        }

        // Update the localStorage with the new array
        localStorage.setItem("todolistarray", newArray.join(','));
    });

    ul.appendChild(li);
}