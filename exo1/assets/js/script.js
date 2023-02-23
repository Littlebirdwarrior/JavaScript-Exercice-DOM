//Script


//mélanger les cartes
function shuffleChildren(parent){
    let children = parent.children
    let i = children.length, k, temp
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

//selectionnner contenant
const board = document.querySelector('#board')

let nb = 1

//génerer cartes et les numeroté
for(let i = 1; i <= 10; i++){
    const newbox = box.cloneNode()
    newbox.innerText = i
    board.appendChild(newbox)

    newbox.addEventListener('click', function(){
        
        if(i == nb){
            console.log('cas victoire');
            newbox.classList.add("box-clicked")
            //1
            if(nb > board.children.length){
                alert("Victoire !")
            }
            nb++
        }
        //2
        else if(i>nb){
            console.log('erreur');
            alert("Erreur !")
            nb = 1
            board.querySelectorAll(".box-clicked").forEach(function(validBox){
                validBox.classList.remove("box-clicked")
            })
            
        }
        //3
        else{
            console.log('deja cliqué');
            alert("Deja cliqué")
        }
        shuffleChildren(board)
        })

}

    
shuffleChildren(board)
