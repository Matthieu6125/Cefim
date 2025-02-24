
document.getElementById("add_new_task_button").addEventListener("click", function () {
    const btnToDisplay = document.getElementById("add_new_task_button");
    const containerForm= document.getElementById("form-container");
    if (containerForm.style.display === "none" || containerForm.style.display === "") {
        containerForm.style.display = "block"; // Afficher l'élément
        btnToDisplay.textContent = "Masquer"; // Changer le texte du bouton
    } else {
        containerForm.style.display = "none"; 
        this.textContent = "Ajouter une tâche"; 
    }
});

document.getElementById('form-task').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupérer les données du formulaire
    const formData = new FormData(event.target);

    // Convertir les données en objet
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    data.statut = "inProcess";
    // Afficher les données dans la console
    console.log(data);
    SaveDataTask(data); // sauvegarder les données dans le localStorage
    const updateAfterForm = JSON.parse(localStorage.getItem("dataTask")); // récupérer les données actualisées
    console.log(updateAfterForm);

    // création d'un appel à une fonction pour mettre à jour l'affichage de la liste des tâches
    // updateDisplay(updateAfterForm);
})



function SaveDataTask(data) {
    const dataTask = JSON.parse(localStorage.getItem("dataTask")) || []; // récupération ou création du tableau pour stocker les données
    dataTask.push(data); // ajout au tableau le nouvel objet provenant du formulaire
    localStorage.setItem("dataTask", JSON.stringify(dataTask)); // sauvegarde dans le localStorage
    console.log("données dans local storage", localStorage.getItem("dataTask"))
}