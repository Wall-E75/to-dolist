//Liens avec le DOM
const headNavElement = document.querySelector('.head__navigation');
const todoChampFormElement = document.querySelector('.todo__champ__form');
const inputTaskElement = document.getElementById('task');
const inputSubmitElement = document.getElementById('bouton');

//création de la variable pour le champ
const valeurDeSaisie = inputTaskElement.value;


const tabVid = [];

 inputSubmitElement.addEventListener('click', (e) => {
    console.log(e); //addTask(tabVid);
 })

/**
 * Fonction
 */
function addTask(tab) {
    tab.push(valeurDeSaisie)
    console.log(tab)
};

// function isFinish() {
//     console.log('LA tache est réalisé !');
// };

// function removeTask() {
//     console.log('Supprimer la tache !');
// }

addTask(tabVid);

// isFinish();

// deleteTask();



