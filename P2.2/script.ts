
/*//1. a)



function min(einhorn: number[]): void {
    let zwischenspeicher: number = einhorn[0];

    for (let i = 0; i < einhorn.length; i++) {
        if (einhorn[i] < zwischenspeicher)
            zwischenspeicher = einhorn[i];
    }
    console.log(zwischenspeicher);
}

min(a);

//b

function isEven(x: number): boolean {
    if (x % 2 == 0) {
        console.log(0);
        return true;
    } else if (x % 2 == 1) {
        console.log(1);
        return false;
    } else {
        console.log(x - 2);
        return null;
    }
}

isEven(-1); //50 -> 0, 75 -> 1
//-1 -> -3, da die ersten beiden if statements nie TRUE sind, und so nur das letzte else statement ausgelöst wird.
//Lösungsansatz: Konsolenausgabe verändern, oder Datentyp der Rückgabe verändern, sodass negative Zahlen zurückgegeben werden können.

interface Student {
    matrikelnummer: number;
    name: string;
    studienfach: string;
}

let student1: Student = { matrikelnummer: 267049, name: "Benni", studienfach: "OMB" };
let student2: Student = { matrikelnummer: 266636, name: "Tabea", studienfach: "OMB" };
let student3: Student = { matrikelnummer: 278451, name: "Sebi", studienfach: "OMB" };

let studentenArray: Student[] = [];
//studentenArray = [];

studentenArray.push(student1, student2, student3);

function addStudent(name: string, matrikelnummer: number, studienfach: string): void {
    let student4: Student = { matrikelnummer, name, studienfach };
    studentenArray.push(student4);
}

function showInfo(studiliste: Student[]): void {
    for (let i = 0; i < studiliste.length; i++) {
        console.log(studiliste[i].name, studiliste[i].matrikelnummer, studiliste[i].studienfach);
    }
}*/
/*
function showInfo(matrikelnummer: number): boolean {
    for (let i = 0; i < studentenArray.length; i++) {
        if (matrikelnummer == studentenArray[i].matrikelnummer) {
            console.log(studentenArray[i].name, studentenArray[i].matrikelnummer, studentenArray[i].studienfach);
            return true;
        }
    }
    console.log("Student nicht gefunden!");
    return false;
}


addStudent("Angelika", 451646, "WING");
showInfo(267049);
showInfo(266636);
showInfo(451646);
showInfo(278451);

class Student2 {
    matrikelnummer: number;
    name: string;
    studienfach: string;
    showInfo(matrikelnummer: number): boolean {
        for (let i = 0; i < studentenArray.length; i++) {
            if (matrikelnummer == studentenArray[i].matrikelnummer) {
                console.log(studentenArray[i].name, studentenArray[i].matrikelnummer, studentenArray[i].studienfach);
                return true;
            }
        }
        console.log("Student nicht gefunden!");
        return false;
    }

    Student2() { };
}
*/

//2) a)

let a: number[] = [1, 2, 3, 4, 5];
let b: number[] = [6, 7, 8, 9, 10];

function backwards(a: number[]): number[] {
    for (let i = a.length - 1; i >= 0; i--) {
        console.log(a[i]);
    }
    return a;
}

//backwards(a);

//b)

function join(baseArray: number[], addingArray: number[]): number[] {
    for (let i = 0; i < addingArray.length; i++) {
        baseArray.push(addingArray[i]);
    }
    console.log(baseArray);
    return baseArray;
}

//join(b, a);


//c

function split(array: number[], left: number, right: number): number[] {
    let copy: number[] = [];
    for (let i = left; i <= right; i++) {
        copy.push(array[i]);
    }
    console.log(copy);
    return copy;
}

//split(a, 0, 3);

/*let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440] ));
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0));     // Bonus c)
console.log(split(arr, -1, 2));    // Bonus c)
console.log(split(arr, 0, 7));     // Bonus c)

*/
// Aufgabe 3) 
// a)

let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
context.fillStyle = "blue";  //Himmel
context.fillRect(0, 0, 500, 400);
context.fillStyle = "green";   //Wiese
context.fillRect(0, 250, 500, 300);

context.beginPath();   //Baumstamm
context.lineWidth = 3;
context.fillStyle = "brown";
context.moveTo(370, 210);
context.lineTo(350, 300);
context.lineTo(410, 300);
context.lineTo(390, 210);
context.lineTo(370, 210);
context.stroke();
context.fill();

context.beginPath();    //Blätter
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "darkgreen";
context.arc(360, 210, 30, 0, Math.PI * 2);
context.fill();
context.stroke();

context.beginPath();    //Blätter
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "darkgreen";
context.arc(380, 180, 30, 0, Math.PI * 2);
context.fill();
context.stroke();

context.beginPath();    //Blätter
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "darkgreen";
context.arc(400, 210, 30, 0, Math.PI * 2);
context.fill();
context.stroke();


context.lineWidth = 10; //Haus
context.fillStyle = "black";
context.fillRect(75, 140, 150, 110);
context.fillStyle = "white";
context.fillRect(130, 190, 40, 60);

context.beginPath();    //Dach
context.fillStyle = "black";
context.moveTo(50, 140);
context.lineTo(150, 60);
context.lineTo(250, 140);
context.closePath();
context.fill();
context.stroke();

context.beginPath();    //Wolke rechts
context.fillStyle = "white";
context.arc(340, 60, 40, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke r
context.fillStyle = "white";
context.arc(370, 35, 30, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke r
context.fillStyle = "white";
context.arc(385, 60, 40, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke links
context.fillStyle = "lightgrey";
context.arc(35, 60, 20, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke l
context.fillStyle = "lightgrey";
context.arc(80, 44, 25, 0, Math.PI * 2);
context.fill();

context.beginPath();    //Wolke l
context.fillStyle = "lightgrey";
context.arc(55, 60, 25, 0, Math.PI * 2);
context.fill();

console.log(canvas);

/*
//b
interface Rechteck {
    fillRect(x: number, y: number, w: number, h: number): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
}

//c

function getRandom(max: number): number {
    return Math.floor(Math.random() * max);
}

function createRect() {
    let x: number = getRandom(500);
    let w: number = getRandom(500);
    let y: number = getRandom(400);
    let h: number = getRandom(400);
    context.fillRect(x, y, w, h);
}

createRect();


class Rectangle {
    width: number;
    height: number;

    createRectangle(_width: number, _height: number): void {
        this.width = _width;
        this.height = _height;
    }

    // c)
    createRandomRec(): void {
        this.width = Math.floor(Math.random() * 100);
        this.height = Math.floor(Math.random() * 100);
    }
    
    // d)
    drawRectangle(x: number, y: number, fill: boolean, color?: string): void {
        let c: string = "#ffc3a0";
        context.beginPath();
        context.rect(x, y, this.width, this.height);
        if (color) {
            context.fillStyle = color;
            context.strokeStyle = color;
        } else {
            context.fillStyle = c;
            context.strokeStyle = c;
        }
        if (fill) {
            context.fill();
        }
        context.stroke();
    }

    drawRandom(): void {
        let x: number = Math.floor(Math.random() * 500);
        let y: number = Math.floor(Math.random() * 400);
        context.beginPath();
        context.rect(x, y, this.width, this.height);
        context.fillStyle = "#c0c0c0";
        context.strokeStyle = "#c0c0c0";
        context.fill();
        context.stroke();
    }
}

const r1: Rectangle = new Rectangle();
r1.createRectangle(300, 200);
r1.drawRectangle(300, 650, true);

// c)
const r2: Rectangle = new Rectangle();
r2.createRandomRec();
r2.drawRectangle(20, 700, false);

// d)
const r3: Rectangle = new Rectangle();
r3.createRandomRec();
r3.drawRectangle(450, 800, true, "#5ac18e");

// e)
const r4: Rectangle = new Rectangle();
r4.createRandomRec();
const r5: Rectangle = new Rectangle();
r5.createRandomRec();
const r6: Rectangle = new Rectangle();
r6.createRandomRec();

let rectangles: Array<Rectangle> = new Array();
rectangles = [r4, r5, r6];
rectangles.forEach(rec => rec.drawRandom());*/