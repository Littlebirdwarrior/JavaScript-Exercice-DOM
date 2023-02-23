//Script


//mélanger les cartes
function shuffleChildren(parent){
    let children = parent.children
    let i = children.lenght, k, temp
    while(--i > 0){
        k = Math.floor(Math.random()*(i+1))
        temp = board.childNodes[k]
        board.childNodes[k] = board.childNodes[i]
        board.appendChild(temp)
    }
}

//generer les cartes
const box = document.createElement('div')
box.classList.add('box')

//selectionnner contenant
const board = document.querySelector('#board')



//génerer cartes et les numeroté
for(let i = 1; i <= 10; i++){
    const newbox = box.cloneNode()
    newbox.innerText = i
    board.appendChild(newbox)

    newbox.addEventListener('click', function(){
    console.log("Boite n°"+ i +", click !");
    })
}

    
shuffleChildren(board)
