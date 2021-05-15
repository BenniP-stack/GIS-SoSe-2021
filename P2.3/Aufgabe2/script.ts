namespace Aufgabe2 {

    const anzeigeflaeche: HTMLElement = document.querySelector(".anzeigeflaeche");
    const headButton: HTMLElement = document.getElementById("showHead");
    //const torsoButton: HTMLElement = document.getElementById("showTorso"); //getElementById seems to work best
    //const legButton: HTMLElement = document.getElementById("showLegs");
    const currentStep: string = anzeigeflaeche ? anzeigeflaeche.id : "";
    const selection: HTMLElement = document.getElementById("selection");

    let head: _head = { head: null };
    let torso: _torso = { torso: null };
    let legs: _legs = { legs: null };

    //create img elemente
    function createImgElement(url: string, part?: string): HTMLImageElement {
        const imgElem: HTMLImageElement = document.createElement("img");
        imgElem.src = url;
        imgElem.id = part;
        return imgElem;
    }

    //data von data.ts einbindung
    function buildPageFromData(buildData: string): void {
        const jsonData: Object = JSON.parse(buildData);
        const currentData: Object = jsonData[currentStep];

        for (const bodyPart in currentData) {
            if (Object.prototype.hasOwnProperty.call(currentData, bodyPart)) {
                const bodyPartImgURL: string = currentData[bodyPart];
                const imgElem: HTMLImageElement = createImgElement(bodyPartImgURL, bodyPart);
                imgElem.classList.add("pic-reel");
                anzeigeflaeche.appendChild(imgElem);
            }
        }
    }
    buildPageFromData(data);

    //select, store and show chosen elements

    function selectElem(id: string): void {
        let url: string = "";
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

    function getURL(bodypart: string, id: string): string {
        const jsonData: Object = JSON.parse(data);
        const chosenURL: string = jsonData[bodypart][id];
        return chosenURL;
    }

    function showName(name: string): void {
        if (name == "") {
            return null;
        }
        selection.classList.add("show");
        const pElem: HTMLParagraphElement = document.createElement("p");
        pElem.className = "nameOutput";
        selection.appendChild(pElem);
        pElem.innerHTML = name;
    }

    function showSelected(url: string): void {
        if (url == null) {
            return null;
        }
        selection.classList.add("show");
        const imgElem: HTMLImageElement = createImgElement(url);
        selection.appendChild(imgElem);
    }

    function paint(): void {
        selection.innerHTML = "";
        showName(localStorage.getItem("name"));
        showSelected(localStorage.getItem("head"));
        showSelected(localStorage.getItem("torso"));
        showSelected(localStorage.getItem("legs"));
    }
    paint();

    const optionsHead: NodeListOf<HTMLElement> = document.querySelectorAll(".anzeigeflaeche");

    function highlightSelection(elem: HTMLElement): void {
        optionsHead.forEach(elem => {
            elem.classList.remove("highlighted");
        });
        elem.classList.add("highlighted");
    }

    //eventlistener
    optionsHead.forEach(elem => {
        elem.addEventListener("click", function (): void {
            selectElem(elem.id);
            highlightSelection(elem);
        });
    });

    if (name != null) {
        name.addEventListener("input", function (): void {
            let input: string = name.value;
            localStorage.setItem("name", input);
            paint();
        });
    }
}