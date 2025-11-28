let tasks = [];

function render() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    if (tasks.length === 0) {
        list.innerHTML = <tr><td class="empty" colspan="4">No task found</td></tr>;
        return;
    }

    tasks.forEach((t, index) => {
        list.innerHTML += `
        <tr>
            <td>${t.name}</td>
            <td>${t.date}</td>
            <td>${t.done ? "Done" : "Pending"}</td>
            <td>
                <button class="action-btn done" onclick="toggleStatus(${index})">Toggle</button>
                <button class="action-btn" onclick="removeTask(${index})">Delete</button>
            </td>
        </tr>`;
    });
}

function addTask() {
    const task = document.getElementById("taskInput").value.trim();
    const date = document.getElementById("dateInput").value;

    if (task === "" || date === "") {
        alert("Task dan tanggal harus diisi!");
        return;
    }

    tasks.push({ name: task, date: date, done: false });
    
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";

    render();
}

function toggleStatus(index) {
    tasks[index].done = !tasks[index].done;
    render();
}

function removeTask(index) {
    tasks.splice(index, 1);
    render();
}

function deleteAll() {
    if (confirm("Hapus semua tugas?")) {
        tasks = [];
        render();
    }
}

function filterTasks() {
    tasks.sort((a, b) => new Date(a.date) - new Date(b.date));
    render();
}