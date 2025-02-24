function updateProgressBar() {
    const tasks = JSON.parse(localStorage.getItem("dataTask"));
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.statut === 'completed').length;
    
    let progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    progressPercentage = Math.round(progressPercentage); // Arrondir le pourcentage

    // Mettre à jour la barre de progression et le texte
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
    document.getElementById('progress-text').textContent = `${progressPercentage}%`;
}

export default updateProgressBar;