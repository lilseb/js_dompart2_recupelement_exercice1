// //1 par la class
// let classTartine = document.getElementsByClassName('tartine')
// console.log(classTartine[0].innerText);

// //2 par l'id
// let idToast = document.getElementById('toast')
// console.log(idToast.innerText);

// //3
// console.log(classTartine[1]);


// // par la balise
// let titre = document.getElementsByTagName('h1')



// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
let premierPara = document.getElementsByClassName('tartine')
console.log(premierPara[0].innerHTML);
// OU
// console.log(premierPara[0].innerText);

// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
let idToast = document.getElementById('toast')
console.log(idToast.innerText);

// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)
let deuxiemePara = document.getElementsByClassName('tartine')
console.log(deuxiemePara[1].innerText);