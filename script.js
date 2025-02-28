document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;
        
        const li = document.createElement("li");
        li.textContent = taskText;
        li.classList.add("task-item");
        
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.classList.add("complete-btn");
        completeBtn.addEventListener("click", () => {
            li.classList.toggle("completed");
        });
        
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });
        
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    });
});
