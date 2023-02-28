//Script
/*Le but de ce jeu est de cliquer le plus vite possible sur les chiffres dans l'ordre
* 1,2,3,4... ect. Si par erreur je clique, le jeu recommence,
* A chaque tour, les cartes sont remélangée. Une carte validée est grisée*/

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

//generer les cartes
const box = document.createElement('div')
box.classList.add('box')

//selectionnner contenant dans le html
const board = document.querySelector('#board')

//Définir le compte à rebours des cartes cliqué à 1
let nb = 1

//génerer cartes et les numeroté (j'en génère 10)
for(let i = 1; i <= 10; i++){
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
                alert("Victoire !")
            }
            //a chaque tour de boucle, nb augmente de 1 : il faut cliqué sur 1, puis 2...etc
            nb++
        }
        //cas 2: si je clique sur une autre carte que 1 au début, 2 au 2e click, 3 au 3e click... etc
        else if(i>nb){
            //pour tout numéro de carte supérieur à nb, je met une alert
            console.log('mauvaise case');
            alert('Mauvaise case, recommencer')
            //puis je resset le jeu, nb vaut 1, et les cartes grisée sont reset
            nb = 1
            board.querySelectorAll(".box-clicked").forEach(function(validBox){
                validBox.classList.remove("box-clicked")
            })
            
        }
        //cas 3: si je clique sur une carte grise
        else{
            alert('Case déjà cliqué')
            console.log('deja cliqué');
        }
        //Quoi qu'il arrive, on shuffle les cartes
        shuffleChildren(board)
        })

}

//A chaque rechargement de la page, je shuffle les carte
shuffleChildren(board)
