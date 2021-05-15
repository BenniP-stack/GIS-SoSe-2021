"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    const anzeigeflaeche = document.querySelector(".anzeigeflaeche");
    const headButton = document.getElementById("showHead");
    //const torsoButton: HTMLElement = document.getElementById("showTorso"); //getElementById seems to work best
    //const legButton: HTMLElement = document.getElementById("showLegs");
    const currentStep = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection = document.getElementById("selection");
    let head = { head: null };
    let torso = { torso: null };
    let legs = { legs: null };
    //create img elemente
    function createImgElement(url, part) {
        const imgElem = document.createElement("img");
        imgElem.src = url;
        imgElem.id = part;
        return imgElem;
    }
    //data von data.ts einbindung
    function buildPageFromData(buildData) {
        const jsonData = JSON.parse(buildData);
        const currentData = jsonData[currentStep];
        for (const bodyPart in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, bodyPart)) {
                const bodyPartImgURL = currentData[bodyPart];
                const imgElem = createImgElement(bodyPartImgURL, bodyPart);
                imgElem.classList.add("pic-reel");
                anzeigeflaeche.appendChild(imgElem);
            }
        }
    }
    buildPageFromData(Aufgabe2.data);
    //select, store and show chosen elements
    function selectElem(id) {
        let url = "";
        switch (currentStep) {
            case "heads":
                url = getURL("heads", id);
                head = { head: url };
                localStorage.setItem("head", url);
                break;
            case "torsos":
                url = getURL("torsos", id);
                torso = { torso: url };
                localStorage.setItem("torso", url);
                break;
            case "legs":
                url = getURL("legs", id);
                legs = { legs: url };
                localStorage.setItem("legs", url);
                break;
            default:
                break;
        }
        paint();
    }
    function getURL(bodypart, id) {
        const jsonData = JSON.parse(Aufgabe2.data);
        const chosenURL = jsonData[bodypart][id];
        return chosenURL;
    }
    function showName(name) {
        if (name == "") {
            return null;
        }
        selection.classList.add("show");
        const pElem = document.createElement("p");
        pElem.className = "nameOutput";
        selection.appendChild(pElem);
        pElem.innerHTML = name;
    }
    function showSelected(url) {
        if (url == null) {
            return null;
        }
        selection.classList.add("show");
        const imgElem = createImgElement(url);
        selection.appendChild(imgElem);
    }
    function paint() {
        selection.innerHTML = "";
        showName(localStorage.getItem("name"));
        showSelected(localStorage.getItem("head"));
        showSelected(localStorage.getItem("torso"));
        showSelected(localStorage.getItem("legs"));
    }
    paint();
    const optionsHead = document.querySelectorAll(".anzeigeflaeche");
    function highlightSelection(elem) {
        optionsHead.forEach(elem => {
            elem.classList.remove("highlighted");
        });
        elem.classList.add("highlighted");
    }
    //eventlistener
    optionsHead.forEach(elem => {
        elem.addEventListener("click", function () {
            selectElem(elem.id);
            highlightSelection(elem);
        });
    });
    if (name != null) {
        name.addEventListener("input", function () {
            let input = name.value;
            localStorage.setItem("name", input);
            paint();
        });
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=script.js.map