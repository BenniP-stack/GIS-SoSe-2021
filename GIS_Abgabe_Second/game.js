"use strict";
class Card {
    constructor(url, id) {
        this.imgUrl = "";
        this.imgUrl = url;
        this.id = id;
    }
}
function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}
class Game {
    constructor(width, height, fieldHtml, scoreFormHtml, timerHtml) {
        this.cards = [];
        this.uncoveredCards = [];
        this.fieldHeight = 0;
        this.fieldWidth = 0;
        this.clickedCard = -1;
        this.secondClickedCard = -1;
        this.pairsFound = [];
        this.board = [];
        this.animationActive = false;
        this.secondsSinceStart = 0;
        this.elementSize = 120;
        this.fieldWidth = 5; //festgelegte fieldsize
        this.fieldHeight = 4;
        this.fieldHtml = fieldHtml;
        this.scoreFormHtml = scoreFormHtml;
        this.timerHtml = timerHtml;
        this.initCards();
        this.timerHandle = setInterval(() => { this.handleTimer(); }, 1000);
        let formElem = scoreFormHtml.querySelector("form");
        formElem.addEventListener("submit", (e) => {
            // on form submission, prevent default
            e.preventDefault();
            fetch("https://bennihirokugis.herokuapp.com/addScore?name=" + encodeURI(e.target[0].value) + "&time=" + encodeURI(pad(Math.floor(this.secondsSinceStart / 60))) + "." + this.secondsSinceStart % 60);
        });
    }
    handleTimer() {
        this.secondsSinceStart++;
        this.timerHtml.innerHTML = "<br>Time : " + pad(Math.floor(this.secondsSinceStart / 60)) + " : " + pad(this.secondsSinceStart % 60) + "<br>";
    }
    async initCards() {
        if (this.fieldHeight * this.fieldWidth % 2 != 0) {
            console.error("Ungültige Feldgröße! Höhe: " + this.fieldHeight + " Breite: " + this.fieldWidth + " Durch 2 teilbar? " + (this.fieldHeight * this.fieldWidth % 2 != 0));
        }
        let response = await fetch("https://bennihirokugis.herokuapp.com/getUrl");
        if (!response.ok) {
            console.error("Error fetching URLs", response);
        }
        let allUrls = await response.json();
        if (allUrls.length < ((this.fieldWidth * this.fieldHeight) / 2)) {
            console.error("Not enough URLs for fieldsize. Fieldsize is : " + ((this.fieldHeight * this.fieldWidth) / 2) + " URLs on Server : " + allUrls.length);
        }
        for (let col = 0; col <= ((this.fieldHeight * this.fieldWidth) - 1); col += 2) {
            //console.log("Filling fields " + col + " and " + (col+1));
            this.cards[col] = new Card(allUrls[(col / 2)].url, col);
            this.cards[col + 1] = new Card(allUrls[(col / 2)].url, (col + 1));
        }
        this.shuffle(this.cards);
        this.drawBoard();
    }
    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    clickHandler(index) {
        if (this.animationActive)
            return;
        if (this.clickedCard == -1) { //Case that no other card is active
            this.clickedCard = index;
        }
        else {
            this.secondClickedCard = index;
            this.drawBoard();
            this.animationActive = true;
            setTimeout(() => {
                if (this.cards[this.clickedCard].imgUrl == this.cards[this.secondClickedCard].imgUrl) { //Check if cards match
                    this.pairsFound.push(this.cards[this.clickedCard]);
                    this.pairsFound.push(this.cards[index]);
                }
                this.clickedCard = -1;
                this.secondClickedCard = -1;
                this.drawBoard();
                this.animationActive = false;
            }, 1000);
        }
        this.drawBoard();
    }
    winGame() {
        clearInterval(this.timerHandle);
        this.scoreFormHtml.hidden = false;
    }
    drawBoard() {
        this.fieldHtml.innerHTML = "";
        let table = document.createElement("table");
        table.className = "gameTable";
        let tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
        for (let index = 0; index <= (this.fieldHeight * this.fieldWidth) - 1; index++) {
            let tr = document.createElement("tr");
            if ((index % this.fieldWidth == 0)) {
                tableBody.appendChild(tr);
            }
            let td = document.createElement("td");
            let fieldButton = document.createElement("div");
            fieldButton.className = ".gameButton";
            if (index == this.clickedCard || index == this.secondClickedCard || (this.pairsFound.indexOf(this.cards[index]) != -1)) { // Wenn karte gezeigt werden soll
                fieldButton.innerHTML = "<img class='memoryImage' src='" + this.cards[index].imgUrl.toString() + "'></img>";
            }
            else {
                fieldButton.innerHTML = "<div class='coveredCard'></div>";
                fieldButton.addEventListener("click", function () { handleClick(index); });
            }
            td.appendChild(fieldButton);
            tr.appendChild(td);
        }
        this.fieldHtml.appendChild(table);
        if (this.pairsFound.length == this.cards.length) {
            this.winGame();
        }
    }
}
let game;
window.addEventListener("load", function () {
    game = new Game(2, 2, document.querySelector("#game"), document.querySelector("#scores"), document.querySelector("#timer"));
});
function handleClick(index) {
    game.clickHandler(index);
}
//# sourceMappingURL=game.js.map