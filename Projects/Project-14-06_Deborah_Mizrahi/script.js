function add_task() {
    const valid = validation();
    if (!valid) return;

    const task = get_task_from_form();
    save_task(task);
    create_postit(task);
}


function validation() {
    return validate_not_empty("date_err", "date_box", "Date") && validate_not_empty("time_err", "time_box", "Time") && validate_task();
}


function validate_not_empty(err_id, field_id, label) {
    const err_element = document.getElementById(err_id);
    const field = document.getElementById(field_id).value;
    err_id.innerText = "";

    if (field === "") {
        err_element.innerText = label + " required";
        document.getElementById(field_id).focus();
        return false;
    }
    err_element.innerText = "";
    return true;
}


function validate_task() {
    const textarea_box = document.getElementById("textarea_box");
    const textarea = textarea_box.value;

    if (textarea === "") {
        textarea_box.placeholder = "Task required";
        textarea_box.style.setProperty('--placeholder-color', "red");
        document.getElementById("textarea_box").focus();
        return false;
    }

    textarea_box.placeholder = "Type over here";
    textarea_box.style.setProperty('--placeholder-color', "grey");
    return true;
}


function get_task_from_form() {
    const date = document.getElementById("date_box").value;
    const time = document.getElementById("time_box").value;
    const task = document.getElementById("textarea_box").value;

    return create_task(date, time, task);
}


function create_task(date, time, task) {
    return {
        date: date,
        time: time,
        task: task,
        id: Math.floor(Math.random() * 10000000) + 1
    };
}


function save_task(task) {
    const tasks = get_tasks_from_storage();
    tasks.push(task);
    save_tasks_to_storage(tasks);
}


function get_tasks_from_storage() {
    const task_JSON = localStorage.getItem("tasks");
    const tasks = !task_JSON ? [] : JSON.parse(task_JSON);

    return tasks;
}


function save_tasks_to_storage(tasks) {
    const task_str = JSON.stringify(tasks);
    localStorage.setItem("tasks", task_str);
}


function create_postit(task, animate = true) {
    const postit_container = document.getElementById("postit_container");
    var div = document.createElement('div');
    div.classList.add('postit', `postit-${Math.floor(Math.random() * 6) + 1}`);
    if (animate) {
        div.classList.add('animated');
    }

    div.innerHTML = `
        <i class="fas fa-times" onclick="delete_postit(${task.id})"></i>
        <div class="task-in-postit">${task.task}</div>
        <div>${task.date}</div>
        <div>${task.time}</div>`;

    postit_container.appendChild(div);
}


function display_postits(tasks) {
    document.getElementById("postit_container").innerHTML = "";

    for (const task of tasks) {
        create_postit(task, animate = false);
    }
}


function delete_postit(id) {
    let tasks = get_tasks_from_storage().filter((task) => task.id !== id);
    save_tasks_to_storage(tasks);
    display_postits(tasks);
}


function clear_form() {
    document.getElementById("date_box").value = "";
    document.getElementById("time_box").value = "";
    document.getElementById("textarea_box").value = "";
    document.getElementById("date_box").focus();
}


function load_tasks() {
    const tasks = get_tasks_from_storage();
    display_postits(tasks);
}


function clear_board() {
    const tasks = get_tasks_from_storage();
    const postit_container = document.getElementById("postit_container");

    postit_container.innerText = "";
    localStorage.removeItem("tasks", tasks);
    clear_form();
}

load_tasks();











