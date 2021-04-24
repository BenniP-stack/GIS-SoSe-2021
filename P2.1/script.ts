function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func8();
    console.log("Logo!");
}
function func8(): void {
    console.log("Klar?");
}
//a1();


let u: string = "Alles";

function b1(): void {
    b2();
    b3();
    b4();
}
function b2(): void {
    console.log(u + " Gute!");
}
function b3(): void {
    console.log(u + " Klar?");
}
function b4(): void {
    console.log(u + " Logo!");
}

b1();

/*1)

a)
Alles
Klar?
Logo!

wird in dieser Reihenfolge ausgegeben

Variablenname sind nur Strings zulässig, int geht nicht

b)
zuerst wird eine Funktion a1() erstellt, hier wird die Variable x mit dem String "Alles" belegt, dann wird dieser String auf der Console ausgegeben. Anschließend wird die funktion func1() ausgeführt, welche den String "Klar?" auf der
Console ausgibt. Am Ende wird auf der Console "Logo!" ausgegeben. Das Alles ist noch teil der Funktion a1(), d.h. es wird erst alles ausgeführt, sobald die Funktion a1() auch aufgerufen wird,
was in Zeile 8 geschieht. Bis dahin passier absolut nichts.

//c)
*/


function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
}

a2();


/*
2)
es wird ein integer i = 9 definiert, hier wird eine do-while schleife ausgeführt, bei welcher der wert von i auf der console ausgegeben wird und anschließen und 1 verringert wird.
Dieser loop läuft so lange bis i nicht mehr die Condition des While Statements erfüllt. Das while muss am Ende der Schleife stehen.


3)
a) Ja, was falsch ist, lässt sich aus den Fehlermeldungen schließen.
*/
let x: string = "Hallo";
console.log(x);     //Hallo
func1(x);           //Bla
console.log(x);     //Hallo
func2();            //Blubb
func3();            //Hier wird x überschrieben
console.log(x);     //Test 

function func1(y: string): void {
    y = "Bla"; //Lokale Variable
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}

/*
4)

a) Vermutung:
Hallo
Bla
Hallo
Blubb
Test

Die Vermutung hat gestimmt.

b) Funktionen sind wie Methoden die etwas mit Variablen anstellen, sei dies Globale Variablen zu überschreiben oder Globale Variablen
als Übergabeparameter in sich selbst weiter zu verarbeiten, 
wobei die globale dann als lokale Variable innerhalb der Funktion gesehen wird und somit nach dem Ende dieser, "stirbt". 
Variablen dagegen sind Werte eines bestimmten Types (int/String/etc.), die von Funktionen
verarbeitet werden können (Übergabeparameter).



// 5)
// a)
*/
function multiply(x: number, y: number): number {
    console.log(x * y);
    return x * y;
}

multiply(6 , 3);


//b)

function max(x: number, y: number): number {
    if (x === y) {
        console.log("Die Zahlen sind gleich");
        return 0;
    }
    else if (x > y) {
        console.log(x);
        return x;
    }
    else {
        console.log(y);
        return y;
    }
}

max(4 , 2);


//c)

function count(): void {
    let a: number = 0;
    let i: number = 1;
    
    do {
        a = a + i;
        console.log(a); // Gibt Zwischensumme aus
        i = i + 1;
    } while (i < 101);
}

count();


//d)

function random(min: number, max: number): void {
    for (let i = 0; i < 10; i++) {
        console.log(Math.random() * (max - min) + min) ;
    }
}

random(0, 100);



function factorial(n: number): number {
    var result = n;
    if (n <= 1) 
      return 1; 
    while (n > 1) { 
      n--;
      result = result * n;
      console.log(result);
    }
    return result;
}

factorial(4);


function leapyears(): void {
    for (let i = 1900; i < 2021; i++) {
    if (i % 4 == 0) {
        if (!(i % 100 == 0)) {
            console.log(i);
        } else if (i % 400 == 0) {
        console.log(i);
    } 
    }
 }
}
leapyears();


//6)
//a)
function hashtag(): void {
   let hash: String = "#";
   for (let i = 0; i < 7; i++) {
       console.log(hash);
       hash += "#";
   }
}

hashtag();

//b)

function fizzbuzz(): void {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0) {
            let f: String = "Fizz";
            console.log(f);
        } else if (!(i % 3 == 0) && i % 5 == 0) {
            let b: String = "Buzz";
            console.log(b);
        } else {
            console.log(i);
        }
    }
}
fizzbuzz();

//c)

function fizzbuzz2(): void {                      // Lösbar mit gemeinsamen Nenner 15 ODER mit verschachtelten If-Statements, wobei der gewählte Weg einfacher ist.
    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0) {
            let fb: String = "FizzBuzz";
            console.log(fb);
        }
        else if (i % 3 == 0) {
            let f: String = "Fizz";
            console.log(f);
        } else if (!(i % 3 == 0) && i % 5 == 0) {
            let b: String = "Buzz";
            console.log(b);
        } else {
            console.log(i);
        }
    }
}

fizzbuzz2();

//d) e)

function schach(b: number, h: number): void {
    let z: String = "";
    for (let s = 0; s < h; s++) { // höhe
        if (s % 2 == 0)
            z += " ";
        for (let i = 0; i < b; i++) { // breite
            if (i % 2 == 0) {
                z += "#";
            } else {
                z += " ";
            }
        }
        z += "\n"; // z = z + "\n";
    }
    console.log(z);
}

schach(8, 8);