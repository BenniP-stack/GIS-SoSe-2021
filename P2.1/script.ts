/*function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}


1)

a)
Alles
Klar?
Logo!

wird in dieser Reihenfolge ausgegeben

Variablenname sind nur Strings zulässig, int geht nicht

b)
zuerst wird eine Funktion a1() erstellt, hier wird die Variable x mit dem String "Alles" belegt, dann wird dieser String auf der Console ausgegeben. Anschließend wird die funktion func1() ausgeführt, welche den String "Klar?" auf der
Console ausgibt. Am ende wird auf der Console "Logo!" ausgegeben. Das Alles ist noch teil der Funktion a1(), d.h. es wird erst alles ausgeführt, sobald die Funktion a1() auch aufgerufen wird,
was in Zeile 8 geschieht. Bis dahin passier absolut nichts.*/




/*function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0); Code hier in der Aufgabenstellung fehlerhaft (whitespace bei der While-Schleife fehlt)
}

a2();


2)
es wird ein integer i = 9 definiert, hier wird eine do-while schleife ausgeführt, bei welcher der wert von i auf der console ausgegeben wird und anschließen und 1 verringert wird.
Dieser loop läuft so lange bis i nicht mehr die Condition des While Statements erfüllt. Das while muss am Ende der Schleife stehen.*/




/*
3)
a) Ja, was falsch ist, lässt sich aus den Fehlermeldungen schließen.*/

/*let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}


4)

a) Vermutung:
Hallo
Bla
Hallo
Blubb
Test

Die Vermutung hat gestimmt.

b) Funktionen sind wie Methoden die etwas mit Variablen anstellen, sei dies Globale Variablen zu überschreiben oder Globale Variablen als Übergabeparameter in sich selbst weiter zu verarbeiten, wobei
die globale dann als lokale Variable innerhalb der Funktion gesehen wird und somit nach dem Ende dieser, "stirbt". Variablen dagegen sind Werte eines bestimmten Types (int/String/etc.), die von Funktionen
verarbeitet werden können (Übergabeparameter).
*/


// 5)
// a)

function multiply(x: number, y: number): number {
    console.log(x * y);
    return x * y;
}

multiply(4 , 3);


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
/*
function count(): void {
    let a: number = 0;
    let i: number = 1;
    
    do {
        a = a + i;
        console.log(a);
        i = i + 1;
    } while (i < 101);
}

count();
*/

//d)

function random(min: number, max: number): void {
    for (let i = 0; i < 10; i++) {
        console.log(Math.random() * (max - min) + min) ;
    }
}

random(0, 100);