namespace Aufgabe2 {

    export let parts: object = {
        heads: [
            { 1: "images/Heads/kopf.jpg" },
            { 2: "images/Heads/kageyama1.jpg" },
            { 3: "images/Heads/kageyama2.jpg" }
        ],
        torsos: [
            { 1: "images/Torso/Cursed_Torso.jpg" },
            { 2: "images/Torso/Cursed_Torso2.jpg" },
            { 3: "images/Torso/Cursed_Torso3.jpg" }
        ],
        legs: [
            { 1: "images/Legs/Cursed_Legs.jpg" },
            { 2: "images/Legs/Cursed_Legs2.jpg" },
            { 3: "images/Legs/Cursed_Legs3.jpg" }
        ]
    };

    export const data: string = JSON.stringify(parts);

    /*export let bodyJSON: string = `{
        "heads":[
            "image": "images/Heads/kopf.jpg",
            "image": "images/Heads/kageyama1.jpg",
            "image": "images/Heads/kageyama2.jpg"
        ]
        "torsos":[
            "image": "images/Torso/Cursed_Torso",
            "image": "images/Torso/Cursed_Torso2",
            "image": "images/Torso/Cursed_Torso3"
        ]
        "legs":[
            "image": "images/Legs/Cursed_Legs",
            "image": "images/Legs/Cursed_Legs2",
            "image": "images/Legs/Cursed_Legs3"
        ]
    }`;  
    export let myObj: HumanBody = JSON.parse(bodyJSON);
*/
}