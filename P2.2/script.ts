namespace Aufgabe1 {
    // 1. a)


    function min(..._zahlen: number[]): number {      //auch mit Infinity als Vergleichswert beim ersten Durchlauf möglich
        let zwischenspeicher: number = _zahlen[0];

        for (let i: number = 0; i < _zahlen.length; i++) {
            if (_zahlen[i] < zwischenspeicher)
                zwischenspeicher = _zahlen[i];
        }
        return zwischenspeicher;
    }

    console.log(min(34, 2, 27, 8, -256));

    //b

    function isEven(x: number): boolean {
        if (x == 0)
            return true;
        if (x == 1)
            return false;
        if (x < 0)
            return isEven(-x);
        else
            return isEven(x - 2);
    }

    isEven(-1); //50 -> 0, 75 -> 1
    //-1 -> -3, da die ersten beiden if statements nie TRUE sind, und so nur das letzte else statement ausgelöst wird.
    //Lösungsansatz: Konsolenausgabe verändern, oder Datentyp der Rückgabe verändern, sodass negative Zahlen zurückgegeben werden können.

    //c

    interface Student {
        matrikelnummer: number;
        name: string;
        studienfach: string;
    }

    let student1: Student = { matrikelnummer: 267049, name: "Benni", studienfach: "OMB" };
    let student2: Student = { matrikelnummer: 266636, name: "Tabea", studienfach: "OMB" };
    let student3: Student = { matrikelnummer: 278451, name: "Sebi", studienfach: "OMB" };

    let studentenArray: Student[] = [];

    studentenArray.push(student1, student2, student3);

    function addStudent(name: string, matrikelnummer: number, studienfach: string): void {
        let student4: Student = { matrikelnummer, name, studienfach };
        studentenArray.push(student4);
    }

    function showInfo(studiliste: Student[]): void {
        for (let i: number = 0; i < studiliste.length; i++) {
            console.log(studiliste[i].name, studiliste[i].matrikelnummer, studiliste[i].studienfach);
        }
    }

    addStudent("Angelika", 451646, "WING");

    showInfo(studentenArray);
}

namespace Aufgabe1_C {
    class Student {
        matrikelnummer: number;
        name: string;
        studienfach: string;

        constructor(_matrikelnummer: number, _name: string, _studienfach: string) {
            this.matrikelnummer = _matrikelnummer;
            this.name = _name;
            this.studienfach = _studienfach;
        }

        showInfo(): void {
            console.log(`Name: ${this.name}, Kurs: ${this.studienfach}, Matrikelnummer: ${this.matrikelnummer}`);
        }
    }
    let student1: Student = new Student(267049, "Benni", "OMB");
    let student2: Student = new Student(266636, "Tabea", "OMB");
    let student3: Student = new Student(278451, "Sebi", "OMB");

    let studentenArray: Student[] = [];

    studentenArray.push(student1, student2, student3);

    for (let student of studentenArray) {
        student.showInfo();
    }
}


namespace Aufgabe2 {
    //2) a)

    let a: number[] = [1, 2, 3, 4, 5];
    let b: number[] = [6, 7, 8, 9, 10];

    function backwards(a: number[]): number[] {
        let c: number[] = [];
        for (let i: number = a.length - 1; i >= 0; i--) {
            c.push(a[i]);
        }
        return c;
    }

    console.log(backwards(a));

    //b)

    function join(baseArray: number[], addingArray: number[]): number[] {
        let joinedArray: number[] = [];
        joinedArray = baseArray;

        for (let i: number = 0; i < addingArray.length; i++) {
            joinedArray.push(addingArray[i]);
        }
        console.log(joinedArray);
        return joinedArray;
    }

    join(b, a);


    //c

    function split(array: number[], left: number, right: number): number[] { //Durch index out of Bounds Exceptions, die man custom werfen kann.
        let copy: number[] = [];
        for (let i: number = left; i <= right; i++) {
            copy.push(array[i]);
        }
        console.log(copy);
        return copy;
    }

    split(a, 0, 2);
}

namespace Aufgabe3 {
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

    //b

    interface Rectangle {
        width: number;
        height: number;
        x: number;
        y: number;
        color: string;
    }

    function getRandom(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }

    function createRandomRect(): Rectangle {
        let x: number = getRandom(0, 200);
        let y: number = getRandom(0, 200);
        let w: number = getRandom(50, 200);
        let h: number = getRandom(50, 200);

        let r: number = getRandom(0, 255);
        let g: number = getRandom(0, 255);
        let b: number = getRandom(0, 255);

        return {
            width: w,
            height: h,
            x: x,
            y: y,
            color: `rgb(${r}, ${g}, ${b})`
        };
    }

    function drawRect(_r: Rectangle): void {
        context.fillStyle = _r.color;
        context.beginPath();
        context.rect(_r.x, _r.y, _r.width, _r.height);
        context.fill();
    }

    let rectCreation: Rectangle[] = [];

    for (let i: number = 0; i < 4; i++) {
        rectCreation.push(createRandomRect());
    }

    for (let i: number = 0; i < rectCreation.length; i++) {
        drawRect(rectCreation[i]);
    }
}
