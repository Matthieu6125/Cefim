import updateDisplay from "./task-list.js"

const sortStatus =document.getElementById('sort-status');

sortStatus.addEventListener('change', function(){
    switch (sortStatus.value) { // test plusieurs cas de solution possible
        case "finished_status" :// Code à exécuter pour les taches maquées comme terminer
            const sortCompletedTask= JSON.parse(localStorage.getItem("dataTask")) || []; // On récupère toujours la donnée de la valeur sur ( dans notre cas le localstorage)
            const tasksListCompletedTask= sortCompletedTask.filter(task => task.statut === 'completed');
            updateDisplay(tasksListCompletedTask);
            
            break;
        case "ongoing_status": // Code à exécuter pour les taches marquées comme en cours
            const sortInProgress = JSON.parse(localStorage.getItem("dataTask")) || [];
            const taskListInprogress = sortInProgress.filter(task => task.statut === 'inProcess');
            updateDisplay(taskListInprogress);
            
            break;
        case "all": // Code à exécuter pour réinitialiser l'affichage
            const allTask = JSON.parse(localStorage.getItem("dataTask")) || [];
            updateDisplay(allTask);
            
            break;
        default: // code d'erreur
            break
    }
});