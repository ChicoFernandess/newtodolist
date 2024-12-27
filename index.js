document.addEventListener(
  "DOMContentLoaded",
  (() => {
    const todolistStorage = localStorage.getItem("todoList");
    const todolist = todolistStorage ? JSON.parse(todolistStorage) : []; // if todolist is empty inicialize with empty array so it doesnt throw error if local storage is empty

    if (todolist.length > 0) {
      // Check if todolist is not empty
      todolist.forEach((item) => printListItem(item));
    }

    function printListItem(item) {
      const ul = document.getElementById("list");
      const li = document.createElement("li");
      li.textContent = item;

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
        const index = todolist.indexOf(item);
        if (index > -1) {
          todolist.splice(index, 1); // Remove the item from the array
        }

        setLocalStorageValue(todolist);
      });

      ul.appendChild(li);
    }

    function setLocalStorageValue(value) {
      localStorage.setItem("todoList", JSON.stringify(value));
    }

    function handleSubmit(event) {
      const form = event.target; // Get the form element
      const formData = new FormData(form); // Collect all form data
      const text = formData.get("task"); // Get task input

      todolist.push(text); // now we push the new value to the array
      setLocalStorageValue(todolist); // save the array values in the local storage

      getList(text);
    }
  })()
);
