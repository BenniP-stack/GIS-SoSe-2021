
//1. a)


/*
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