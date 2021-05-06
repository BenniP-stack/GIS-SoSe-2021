"use strict";
/*namespace Aufgabe01 {
    document.addEventListener("DOMContentLoaded", function (): void {

        const newRec: HTMLElement = document.getElementById("newRec");   //button 1
        const recContainer: HTMLElement = document.querySelector(".anzeigefläche");  //erster recContainer wird gewählt
        const reset: HTMLElement = document.getElementById("reset"); //button 2

        class Rectangle {
            width: number;
            height: number;

            createRandomRec(): void {
                this.width = Math.floor(Math.random() * 100 + 20);
                this.height = Math.floor(Math.random() * 100 + 20);
            }

            drawRandom(rec: Rectangle): void {
                let x: number = Math.floor(Math.random() * 700);
                let y: number = Math.floor(Math.random() * 300 + 100);
                let recDiv: HTMLDivElement = document.createElement("div");
                recDiv.style.width = rec.width + "px";
                recDiv.style.height = rec.height + "px";
                recDiv.style.top = y + "px";
                recDiv.style.left = x + "px";
                recDiv.style.position = "absolute";
                recDiv.style.backgroundColor = "rgba(139, 0, 0, 0.7)";
                recContainer.appendChild(recDiv);
            }
        }

        function addNewRec(): void {
            let rec: Rectangle = new Rectangle();
            rec.createRandomRec();
            rec.drawRandom(rec);
        }

        function clearRecContainer(): void {
            recContainer.innerHTML = "";
        }

        newRec.addEventListener("click", addNewRec);
        reset.addEventListener("click", clearRecContainer);

    });
}

namespace Aufgabe02 {

    const create: HTMLElement = document.getElementById("create");
    const save: HTMLElement = document.getElementById("save");

    class Person {
        head: string;
        body: string;
        legs: string;
        name: string;

        setHead(_head: string): void {
            this.head = _head;
        }

        setBody(_body: string): void {
            this.body = _body;
        }

        setLegs(_legs: string): void {
            this.legs = _legs;
        }

        setName(_name: string): void {
            this.name = _name;
        }
    }
    let person: Person;

    function setPerson(): void {
        const _person: Person = new Person();
        person = _person;
    }

    function createPerson(): void {} //Darstellung der vom Nutzer ausgewählten Optionen

    save.addEventListener("click", setPerson);
    create.addEventListener("click", createPerson); //"Create" als abschließender Schritt, "Präsentation" des Ergebnisses auf der Mainpage
}*/ 
//# sourceMappingURL=script.js.map