"use strict";
var Aufgabe01;
(function (Aufgabe01) {
    document.addEventListener("DOMContentLoaded", function () {
        const newRec = document.getElementById("newRec"); //button 1
        const recContainer = document.querySelector(".anzeigefläche"); //erster recContainer wird gewählt
        const reset = document.getElementById("reset"); //button 2
        class Rectangle {
            createRandomRec() {
                this.width = Math.floor(Math.random() * 100 + 20);
                this.height = Math.floor(Math.random() * 100 + 20);
            }
            drawRandom(rec) {
                let x = Math.floor(Math.random() * 700);
                let y = Math.floor(Math.random() * 300 + 100);
                let recDiv = document.createElement("div");
                recDiv.style.width = rec.width + "px";
                recDiv.style.height = rec.height + "px";
                recDiv.style.top = y + "px";
                recDiv.style.left = x + "px";
                recDiv.style.position = "absolute";
                recDiv.style.backgroundColor = "rgba(139, 0, 0, 0.7)";
                recContainer.appendChild(recDiv);
            }
        }
        function addNewRec() {
            let rec = new Rectangle();
            rec.createRandomRec();
            rec.drawRandom(rec);
        }
        function clearRecContainer() {
            recContainer.innerHTML = "";
        }
        newRec.addEventListener("click", addNewRec);
        reset.addEventListener("click", clearRecContainer);
    });
})(Aufgabe01 || (Aufgabe01 = {}));
var Aufgabe02;
(function (Aufgabe02) {
    const create = document.getElementById("create");
    const save = document.getElementById("save");
    class Person {
        setHead(_head) {
            this.head = _head;
        }
        setBody(_body) {
            this.body = _body;
        }
        setLegs(_legs) {
            this.legs = _legs;
        }
        setName(_name) {
            this.name = _name;
        }
    }
    let person;
    function setPerson() {
        const _person = new Person();
        person = _person;
    }
    function createPerson() { } //Darstellung der vom Nutzer ausgewählten Optionen
    save.addEventListener("click", setPerson);
    create.addEventListener("click", createPerson); //"Create" als abschließender Schritt, "Präsentation" des Ergebnisses auf der Mainpage
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=script.js.map