let Gameboard = (function() {
    let gameboard = document.querySelector('#gameboard');
    for (i=0; i<9; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'box');
        gameboard.appendChild(div);
    }
})()