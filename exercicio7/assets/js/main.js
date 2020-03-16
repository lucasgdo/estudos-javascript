function main () {
    const inputTask = document.querySelector('.input-task');
    const btnTask = document.querySelector('.btn-task');
    const tasks = document.querySelector('.tasks');

    cleanInput();

    inputTask.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            if (!inputTask.value) return;
            newTask(inputTask.value);
        }
    })

    function newDeleteButton(li) {
        li.innerText += ' ';
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Apagar';
        deleteButton.setAttribute('class', 'clean');
        deleteButton.setAttribute('title', 'Apagar esta tarefa');
        li.appendChild(deleteButton);
    }

    function cleanInput() {
        inputTask.value = '';
        inputTask.focus();
    }

    function newLi() {
        const li = document.createElement('li');
        return li;
    }

    function newTask(inputText) {
        const li = newLi();
        li.innerText = inputText;
        tasks.appendChild(li);
        cleanInput();
        newDeleteButton(li);
        saveTasks();
    }

    btnTask.addEventListener('click', function() {
        if (!inputTask.value) return;
        newTask(inputTask.value);
    });

    document.addEventListener('click', function(e) {
        const el = e.target;
        if (el.classList.contains('clean')) {
            el.parentElement.remove();
            saveTasks();
        }
    });

    function saveTasks() {
        const liTasks = tasks.querySelectorAll('li');
        const taskList = [];

        for (let task of liTasks) {
            let taskText = task.innerText;
            taskText = taskText.replace('Apagar', '').trim();
            taskList.push(taskText);
        }
        const taskJSON = JSON.stringify(taskList);
        localStorage.setItem('tasks', taskJSON);
    }

    function addSavedTasks() {
        const tasks = localStorage.getItem('tasks');
        const taskList = JSON.parse(tasks);
        for (let task of taskList) {
            newTask(task);
        }
    }

    addSavedTasks();
}

main();