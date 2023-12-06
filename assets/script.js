function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var taskText = document.createElement("p");

        taskText.innerHTML = taskInput.value.trim();
        li.appendChild(taskText)
        li.innerHTML += '<div class="button-list"> <button class="done-button" onclick="markDoneTask(this)">Mark as Done</button> <button class="delete-button" onclick="removeTask(this)">Delete</button> </div>';
        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function markDoneTask(button) {
    var li = button.parentNode.parentNode;
    li.classList.toggle("done");
}

function removeTask(button) {
    var div = button.parentNode.parentNode;
    var li = div.parentNode;
    li.parentNode.removeChild(li);
}

function clearAll() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}
