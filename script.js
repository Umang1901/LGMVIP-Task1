document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const taskText = todoInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement('li');

            const tickSpan = document.createElement('span');
            tickSpan.textContent = '✔';
            tickSpan.classList.add('tick');
            listItem.appendChild(tickSpan);

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.classList.add('task-text');
            listItem.appendChild(taskSpan);

            listItem.addEventListener('click', () => {
                listItem.classList.toggle('selected');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '✖';
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation();
                listItem.remove();
                updateListColors();
            });

            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
            todoInput.value = '';
            updateListColors();
        }
    }

    function updateListColors() {
        const items = todoList.querySelectorAll('li');
        items.forEach((item, index) => {
            if (item.classList.contains('selected')) {
                item.style.backgroundColor = (index % 2 === 0) ? 'white' : 'skyblue';
            }
        });
    }
});
