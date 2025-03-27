// const task = document.querySelector("h3");
// console.log(task.textContent);

// // select array of the ul
// const tasklist = document.querySelectorAll("ul li");
// console.log(tasklist);
// for (let i = 0; i < tasklist.length; i++) {
//   console.log(tasklist[i].textContent);
// }

const taskbox = document.querySelector(".textbox");
const list = document.querySelector(".list");
const button = document.querySelector(".button");
console.log(taskbox.placeholder);

function newTask() {
    if (taskbox.value === "") {
        return;
    }
    const task = document.createElement("li");
    task.innerHTML = `
    <input type="tickbox" class="tickbox">
    <label>${taskbox.value}</label>
    <button class="bin">🗑️</button\>
    `

    const bin = task.querySelector(".bin");
    const checkbox = task.querySelector(".tickbox");

    bin.addEventListener("click", () => {
        list.removeChild(task);
    });

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            task.style.textDecoration = "line-through";
            task.style.color = "gray";
            task.appendChild(bin);
        } else {
            task.style.textDecoration = "none";
            task.style.color = "black";
            task.prepend(bin);
        }
    }
    );

    task.textContent = taskbox.value;
    list.append(task);
    taskbox.value = "";
}

button.addEventListener("click", newTask);

taskbox.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        newTask();
    }
});