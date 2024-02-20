const Render = (function() {
    const gameboard = document.querySelector('#gameboard');

    for (i=0; i<9; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'box');
        div.setAttribute('id', `${i}`);
        gameboard.appendChild(div);
    }

})();

const Game = (function() {
    let turn = 0;
    const o = 'O';
    const x = 'X';
    const boxes  = document.querySelectorAll('.box');
    const wins = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];

    const placeSymbol = (e) => {
        let symbol = turn % 2 === 0 ? x : o
        e.target.innerHTML = symbol;

        if (checkForWinner(symbol)) {
            alert('We have a winner!');
            clearGameboard();
            reset();
        }

        changeTurn();
    }

    const addEvent = () => {
        boxes.forEach(box => {
        box.addEventListener('click', placeSymbol, { once: true })
        }) 
    }

    const checkForWinner = (symbol) => {
        return wins.some( win => {
            return win.every(index => {
                return boxes[index].textContent === symbol
            })
        })
    }

    const changeTurn = () => {
        turn ++
    }

    const clearGameboard = () => {
        boxes.forEach(box => {
            box.textContent = '';
        }) 
    }

    const reset = () => {
        clearGameboard();
        location.reload();
    }

    return {
        addEvent
    }

})()

Game.addEvent();