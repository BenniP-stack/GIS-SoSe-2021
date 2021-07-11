"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Card {
        constructor(url, id) {
            this.imgUrl = "";
            this.imgUrl = url;
            this.id = id;
        }
    }
    function pad(_val) {
        let valString = _val + "";
        if (valString.length < 2) {
            return "0" + valString;
        }
        else {
            return valString;
        }
    }
    class Game {
        constructor(_fieldHtml, _scoreFormHtml, _timerHtml) {
            this.cards = [];
            this.uncoveredCards = [];
            this.fieldHeight = 0;
            this.fieldWidth = 0;
            this.clickedCard = -1;
            this.secondClickedCard = -1;
            this.pairsFound = [];
            this.animationActive = false;
            this.secondsSinceStart = 0;
            this.fieldWidth = 5; //festgelegte fieldsize
            this.fieldHeight = 4;
            this.fieldHtml = _fieldHtml;
            this.scoreFormHtml = _scoreFormHtml;
            this.timerHtml = _timerHtml;
            this.initCards();
            this.timerHandle = setInterval(() => { this.handleTimer(); }, 1000);
            let formElem = _scoreFormHtml.querySelector("form");
            formElem.addEventListener("submit", (e) => {
                e.preventDefault();
                fetch("https://bennihirokugis.herokuapp.com/addScore?name=" + encodeURI(document.getElementById("PlayerName").value) + "&time=" + encodeURI(pad(Math.floor(this.secondsSinceStart / 60))) + "." + this.secondsSinceStart % 60);
                formElem.reset();
            });
            // formElem.addEventListener("submit", (e) => {
            //     e.preventDefault();
            //     fetch("https://bennihirokugis.herokuapp.com/addScore?name=" + encodeURI(e.target[0].value) + "&time=" + encodeURI(pad(Math.floor(this.secondsSinceStart / 60))) + "." + this.secondsSinceStart % 60);
            // }); 
        }
        handleTimer() {
            this.secondsSinceStart++;
            this.timerHtml.innerHTML = "<br>Time: " + pad(Math.floor(this.secondsSinceStart / 60)) + " : " + pad(this.secondsSinceStart % 60) + "<br>";
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
                this.cards[col] = new Card(allUrls[(col / 2)].url, col);
                this.cards[col + 1] = new Card(allUrls[(col / 2)].url, (col + 1));
                console.log(this.cards);
            }
            this.shuffle(this.cards);
            this.drawBoard();
        }
        shuffle(_array) {
            let currentIndex = _array.length, temporaryValue, randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = _array[currentIndex];
                _array[currentIndex] = _array[randomIndex];
                _array[randomIndex] = temporaryValue;
            }
            return _array;
        }
        clickHandler(_index) {
            if (this.animationActive)
                return;
            if (this.clickedCard == -1) { //Case that no other card is active
                this.clickedCard = _index;
            }
            else {
                this.secondClickedCard = _index;
                this.drawBoard();
                this.animationActive = true;
                setTimeout(() => {
                    if (this.cards[this.clickedCard].imgUrl == this.cards[this.secondClickedCard].imgUrl) { //Check if cards match
                        this.pairsFound.push(this.cards[this.clickedCard]);
                        this.pairsFound.push(this.cards[_index]);
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
            let tr;
            for (let index = 0; index <= ((this.fieldHeight * this.fieldWidth) - 1); index++) {
                if ((index % this.fieldWidth == 0)) {
                    tr = document.createElement("tr"); //"Zeilenumbruch"
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
        game = new Game(document.querySelector("#game"), document.querySelector("#scores"), document.querySelector("#timer"));
    });
    function handleClick(_index) {
        game.clickHandler(_index);
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=game.js.map