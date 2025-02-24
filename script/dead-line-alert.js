function deadLineAlert(){
    console.log("dead line alert appelé")
    const today = new Date(); // Date d'aujourd'hui
    const alertTasks = []; // Tableau pour stocker les tâches proches de l'échéance
    const tasks = JSON.parse(localStorage.getItem("dataTask")); // récuperation de la liste des taches
    tasks.forEach(task => {
        const taskDate = new Date(task['input-date']); // Convertir la date de la tâche
        const timeDiff = (taskDate - today) / (1000 * 60 * 60 * 24); // Différence en jours

        if (timeDiff >= 0 && timeDiff <= 2) { // Vérifie si la tâche est dans 2 jours ou moins
            alertTasks.push(`📅 ${task['input-title']} - Échéance : ${task['input-date']}`); // ajoute la tâche à la liste des taches à afficher si condition vrai
        }
    });

    // n'affiche une alerte uniquement si le tableau contient au moins une tache 
    if (alertTasks.length > 0) {
        alert(`⚠️ Tâches à échéance dans 2 jours :\n\n${alertTasks.join("\n")}`);
    }
}

document.addEventListener('DOMContentLoaded', deadLineAlert); // affiche cette alert au chargement de la page