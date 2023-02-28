//Script
/*Le but de ce jeu est de cliquer le plus vite possible sur les chiffres dans l'ordre
* 1,2,3,4... ect. Si par erreur je clique, le jeu recommence,
* A chaque tour, les cartes sont remélangée. Une carte validée est grisée*/

function getMyPrompt(){
    //Je récupére un prompt
    let myPrompt = prompt("Avec combien de boite voulez vous jouez");
    //au cas ou le prompt est vide, envoyer alert
    if (myPrompt == null || myPrompt == "") {
        alert("Veuillez entrer un chiffre")
    } else {
        //si le prompt n'est pas vide, chiffre en string, on le convertis en nombre
         let promptNumber = parseInt(myPrompt);
         //si parseInt renvois NaN, c'est que l'on ne peut pas convertir le prompt en int, dans ce cas, erreur
         if(isNaN(promptNumber)){
             alert("Erreur : vous n'avez PAS tapé un nombre")
         } else {
             //si tout est bon, on renvois le int du prompt
             return promptNumber
         }
    }
}

//fonction Shuffle : mélanger les cartes
function shuffleChildren(parent){
    let children = parent.children

    /*temp => nom d'une variable temporaire
    (vu qu'à la ligne d'après on écrase la valeur de children[k],
    on a sauvegarder au préalable la valeur dans celle-ci dans temp*/

    let i = children.length, k, temp
    //tant que 1 est positif, le numero de mes carte augmente
    while(--i > 0){
        k = Math.floor(Math.random()*(i+1))
        temp = children[k]
        children[k] = children[i]
        parent.appendChild(temp)
    }
}

//Afficher les messages d'erreur

/*Au clic sur une boite, la fonction showReaction()
sera appelée pour provoquer une réaction visuelle sur cette même boite.*/
function showReaction(type, clickedBox){
    clickedBox.classList.add(type) //type (une chaine de caractères) correspondant au type de réaction souhaité
    //si ce type est différent de success
    if(type!== "success"){
        //j'ajoute un type sur les box, qui se retire à 800ms
        setTimeout(function (){
            clickedBox.classList.remove(type)
        }, 800)
    }
}

//generer les cartes
const box = document.createElement('div')
box.classList.add('box')

//selectionnner contenant dans le html
const board = document.querySelector('#board')

//Définir le compte à rebours des cartes cliqué à 1
let nb = 1

function displayCard(){
    //recupérer le prompt en appelant la fonction
    let prompt = getMyPrompt();
    console.log('l\'utilisateur demande : ', prompt, 'cartes');
    //génerer cartes et les numeroté (j'en génère 10)
    for(let i = 1; i <= prompt; i++){
        const newbox = box.cloneNode()
        newbox.innerText = i
        board.appendChild(newbox) //fonction appendChild injecte element dans DOM
        //Le jeu
        newbox.addEventListener('click', function(){
            //cas 1: Je valide les case dans l'ordre
            if(i == nb){
                console.log('case validé');
                //si la carte est bonne, elle est grisée
                newbox.classList.add("box-clicked");
                //si j'arrive à la 10e case, je gagne le jeu
                if(nb == board.children.length){
                        stopChrono();
                    //si success, la fonction showReaction s'execute
                    board.querySelectorAll(".box").forEach(function (box){
                        showReaction("success", box)
                    })
                }
                //a chaque tour de boucle, nb augmente de 1 : il faut cliqué sur 1, puis 2...etc
                nb++
            }
            //cas 2: si je clique sur une autre carte que 1 au début, 2 au 2e click, 3 au 3e click... etc
            else if(i>nb){
                //pour tout numéro de carte supérieur à nb, je met un message
                console.log('mauvaise case');
                showReaction("error", newbox);
                //puis je resset le jeu, nb vaut 1, et les cartes grisée sont reset
                nb = 1
                board.querySelectorAll(".box-clicked").forEach(function(validBox){
                    validBox.classList.remove("box-clicked")
                })

            }
            //cas 3: si je clique sur une carte grise
            else{
                console.log('deja cliqué');
                showReaction("notice", newbox)
            }
            //Quoi quel que soit le cas, on shuffle les cartes a chaque sortie de condition
            shuffleChildren(board)
        })

    }

}

//Score et timer

//Mesurer les temps

let chrono = 0; // Temps en secondes
let timer; // Stocke l'ID du chronomètre

function startChrono() {
    timer = setInterval(function() {
        chrono++;
        displayRunningTimer();
    }, 1000); // Exécute la fonction toutes les secondes (1000 ms)
}

function stopChrono() {
    // Arrête le chronomètre et stocker le resultat
    clearInterval(timer);
    let gameChrono = chrono;
    //afficher le chrono optenu
    console.log('mon temps pour cette partie', gameChrono)
    resetChrono();
    displayChrono(gameChrono);
    displayRunningTimer();
}

//Reset le chrono
function resetChrono() {
    chrono = 0; // Réinitialise le temps
}

// //Comparer les temps
// function getTheBestChrono() {
//     //en millisecondes
//     // Vérifie si le score actuel est meilleur que le meilleur score stocké localement
//     if(localStorage.getItem("bestChrono")) {
//         let bestChrono = parseInt(localStorage.getItem("bestChrono"));
//         if (setChrono < bestChrono) {
//             localStorage.setItem("bestChrono", setChrono.toString());
//         }
//     } else {
//         localStorage.setItem("bestChrono", setChrono.toString());
//     }
//
//     // Récupère le meilleur temps stocké localement
//     let bestChrono = parseInt(localStorage.getItem("bestChrono"));
//
//     // renvois le meilleur temps
//     console.log("Le meilleur temps est : " + bestChrono + " millisecondes");
//     return bestChrono
// }

// Affiche le timer qui décroit
function displayRunningTimer() {
    let minutes = Math.floor(chrono / 60);
    let seconds = chrono % 60;
    let runningTimer = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    document.getElementById("timer").innerHTML = runningTimer; // Affiche le temps dans une balise HTML
}

//Affiche le score de la partie
function displayChrono(gameChrono) {
    let minutes = Math.floor(gameChrono / 60);
    let seconds = gameChrono % 60;
    let chronoDisplay = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    document.getElementById("chrono").innerHTML = chronoDisplay; // Affiche le temps dans une balise HTML
}

// Affiche le meilleur temps
// function displayBestChrono(bestChrono) {
//     let minutes = Math.floor(bestChrono / 60);
//     let seconds = bestChrono % 60;
//     let bestChronoDisplay = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
//     document.getElementById("bestChrono").innerHTML = bestChronoDisplay; // Affiche le temps dans une balise HTML
// }


//JOUER
//A chaque rechargement de la page, je shuffle les carte
startChrono();
displayCard();
shuffleChildren(board);
