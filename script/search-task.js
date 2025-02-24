import updateDisplay from "./task-list.js";



function searchTasks() {
    console.log("searchTask est appelé");
    const searchText = document.getElementById('search-bar').value.toLowerCase(); // Récupère et met en minuscule pour éviter la casse
    const tasks = JSON.parse(localStorage.getItem("dataTask"));
    const filteredTasks = tasks.filter(task => 
        task["input-title"].toLowerCase().includes(searchText) // Vérifie si le titre contient le texte saisi
    );
    console.log("filter search", filteredTasks);
    updateDisplay(filteredTasks); // Met à jour l'affichage avec les résultats filtrés
}

// écouteur d'évenement sur l'input de la barre de recherche
document.getElementById('search-bar').addEventListener('input', searchTasks);