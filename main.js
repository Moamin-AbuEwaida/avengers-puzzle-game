// initial variables
const rows = 5, columns = 5;

let currTile, otherTile, turns=0;

// window loading function
window.onload = function(){
    //initialize the 5x5 game board
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++){
            //creating an image tag
            const tile = document.createElement('img');
            // console.log(tile)
            tile.src= './images/blank.jpg';

            // drag and drop functionality
            tile.addEventListener('dragstart', dragStart);
            tile.addEventListener('dragover', dragOver);
            tile.addEventListener('dragenter', dragEnter);
            tile.addEventListener('dragleave', dragLeave);
            tile.addEventListener('drop', dragDrop);
            tile.addEventListener('dragend', dragEnd);


            document.getElementById('board').append(tile);
        }
    }
    //pieces board
    const pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString()); // filling pieces array with puzzle's images names (from 1 to 25)
    }

    // images shuffling
    pieces.reverse();

    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);
        //swap
        let temp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = temp;
    }

    for (let i = 0; i < pieces.length; i++) {
        const tile = document.createElement('img');
        tile.src= './images/' + pieces[i] + '.jpg';

        // drag and drop functionality
        tile.addEventListener('dragstart', dragStart);
        tile.addEventListener('dragover', dragOver);
        tile.addEventListener('dragenter', dragEnter);
        tile.addEventListener('dragleave', dragLeave);
        tile.addEventListener('drop', dragDrop);
        tile.addEventListener('dragend', dragEnd);


        document.getElementById('pieces').append(tile);
    }
};

// drag tiles functions
function dragStart(){
    currTile = this; // the clicked image
};

function dragOver(e){
    e.preventDefault();
};

function dragEnter(e){
    e.preventDefault();
};

function dragLeave(){};

function dragDrop(){
    otherTile = this; // the dropped image
};

function dragEnd(){
    if (currTile.src.includes('blank')){
        return
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;

    currTile.src = otherImg;
    otherTile.src = currImg;

    


    if (puzzle === solution){
        alert('Congratulations you solved it 🎉')
    }

    //increasing the turns counter by 1
    turns += 1;


    if( turns == 27){
        alert ('game over 😅');
        document.location.reload();
    }
    document.getElementById('turns').innerText = turns;
};