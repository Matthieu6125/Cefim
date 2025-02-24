import updateDisplay from "./task-list.js"; // importe la fonction d'affichage des tâches pour pouvoir l'appeler

const sortDating = document.getElementById('sort-dating');

sortDating.addEventListener('change', function(){
   
    switch (sortDating.value) {
        case "from_closest_to_oldest" :
            sortTasksClosestToOldest();
            break;
        case "from_oldest_to_closest":
            sortTasksOldestToClosest();
            break;
        case "no-deadline":
            const allTask = JSON.parse(localStorage.getItem("dataTask")) || [];
            updateDisplay(allTask); // actualise l'affichage dans l'ordre où on était crées les tâches
            break;
        default:
            break;
    }}
    );

function sortTasksClosestToOldest() { // du plus proche au plus ancien
    let tasks = JSON.parse(localStorage.getItem("dataTask")) || [];
    tasks.sort((a, b) => new Date(a['input-date']) - new Date(b['input-date'])); // trie le tableau par ordre croissant
    updateDisplay(tasks);
}


function sortTasksOldestToClosest() { // du plus ancien au plus proche
    let tasks = JSON.parse(localStorage.getItem("dataTask")) || [];
    tasks.sort((a, b) => new Date(b['input-date']) - new Date(a['input-date'])); // trie le tableau par ordre décroissant
    updateDisplay(tasks);
}