let Game = (function() {
    let gameboard = document.querySelector('#gameboard');
    render();
    let turn = 0;
    let o = 'O';
    let x = 'X';
    let boxes  = document.querySelectorAll('.box');
    let wins = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
    
    function render() {
        for (i=0; i<9; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'box');
        div.setAttribute('id', `${i}`);
        gameboard.appendChild(div);
        }
    };

    boxes.forEach(box => {
        box.addEventListener('click', placeSymbol, { once: true })
    }) 

    function placeSymbol(e) {
        let symbol = turn % 2 === 0 ? x : o
        e.target.innerHTML = symbol;
        checkForWinner();
        turn ++;
    }

    function checkForWinner() {
        wins.forEach( win => {
            if (boxes[win[0]].textContent === boxes[win[1]].textContent 
                && boxes[win[1]].textContent === boxes[win[2]].textContent 
                && boxes[win[0]].textContent !== '') {
                alert('We have a winner!');
                clearGameboard();
            }
        })
    }

    function clearGameboard() {
        boxes.forEach(box => {
            box.textContent = '';
        }) 
    }
})()