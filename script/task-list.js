import updateProgressBar from './finished-bar-tasks.js';

let tasks = JSON.parse(localStorage.getItem("dataTask"))|| [];
console.log("tasks", tasks);
function updateDisplay(tasks) {
    if(!tasks){ return}
    const taskList = document.getElementById('task-list-container');
    taskList.innerHTML = ''; // Effacer le contenu actuel de la liste
    console.log("data dans local storage", tasks);
    tasks.forEach(task => {
        const taskContainer = document.createElement('li');
        taskContainer.classList.add("task-container")
        // ajout des informations titre et description
        const item = document.createElement('div');
        item.classList.add("task-info-container");
        const infoItem = document.createElement('div');
        infoItem.classList.add('information-container');
        const title = document.createElement('h2');
        title.textContent = task['input-title'];
        title.classList.add("task-title");
        const description = document.createElement('p');
        description.textContent = task['textarea-description'];
        description.classList.add("task-description");
        infoItem.appendChild(title);
        infoItem.appendChild(description);
        item.appendChild(infoItem);
        // ajout de la suppression de l'élément
        const trashIcon = document.createElement('i');
        trashIcon.classList.add('fa', 'fa-trash');

        // ajout information priorité et date de fin 
        const priority = document.createElement('p');
        priority.textContent = task['priority'];
        if (priority.textContent.trim() === 'Basse') {
            priority.classList.add('priority-low');
        } else if (priority.textContent.trim() === 'Moyenne') {
            priority.classList.add('priority-medium');
        } else if (priority.textContent.trim() === 'Haute') {
            priority.classList.add('priority-high');
        }
        const taskEnd = document.createElement('p')
        taskEnd.textContent = task['input-date'];

        // ajout du contenneur pour la priorité et l'échéance
        const containerInfoPriority = document.createElement('div');
        containerInfoPriority.classList.add('containerInfoPriority');
        

        // ajout de la sélection en cours, terminer
        const status = document.createElement('select');
        status.classList.add('task-status');
        status.innerHTML = `
            <option value="inProcess" ${task.statut === 'inProcess' ? 'selected' : ''}>En cours</option>
            <option value="completed" ${task.statut === 'completed' ? 'selected' : ''}>Terminer</option>
        `;

        containerInfoPriority.appendChild(priority);
        containerInfoPriority.appendChild(status);
        containerInfoPriority.appendChild(taskEnd);

        taskContainer.appendChild(trashIcon);
        taskContainer.appendChild(item);
        taskContainer.appendChild(containerInfoPriority);
        taskList.appendChild(taskContainer);
        
        

        // Ajouter un écouteur d'événement pour mettre à jour le statut
        status.addEventListener('change', function() {
            const newStatus = status.value;
            task.statut = newStatus;
            localStorage.setItem("dataTask", JSON.stringify(tasks));
            updateProgressBar();
        });


        trashIcon.addEventListener('click', function() {
            console.log("trashIcon appelé");
            item.remove(); // Supprimer l'élément <li> du DOM
            // Supprimer la tâche du localStorage (optionnel)
            const index = tasks.indexOf(task);
            if (index > -1) {
                tasks.splice(index, 1);
                localStorage.setItem("dataTask", JSON.stringify(tasks));
            }
            updateDisplay(tasks);
        }); 
    });
    updateProgressBar();
}


document.addEventListener('DOMContentLoaded', function () {
    updateDisplay(tasks);
});

export default updateDisplay;