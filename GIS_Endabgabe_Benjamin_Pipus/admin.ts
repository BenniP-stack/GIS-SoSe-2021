async function loadUrlsFromDB(target: HTMLElement): Promise<void> {

    let response: Response = await fetch("https://bennihirokugis.herokuapp.com/getUrl");


    if (!response.ok) {
        console.error("Error fetching URLs", response);
    }

    let allUrls = await response.json();


    let table: HTMLElement = document.createElement("table");
    table.className = "gameTable";
    let tableBody: HTMLElement = document.createElement("tbody");
    table.appendChild(tableBody);
    let tr: HTMLElement;
    for (let index: number = 0; index <= allUrls.length - 1; index++) {

        if ((index % 5 == 0)) {
            tr = document.createElement("tr");
            tableBody.appendChild(tr);
        }
        let td: HTMLElement = document.createElement("td");


        let fieldButton: HTMLElement = document.createElement("div");
        fieldButton.className = ".gameButton";

        fieldButton.innerHTML = "<img class='memoryImageAdmin' src='" + allUrls[index].url + "'></img>";
        fieldButton.addEventListener("click", function (): void { removeUrl(allUrls[index].url); });



        td.appendChild(fieldButton);
        tr.appendChild(td);

    }
    target.appendChild(table);
}

function removeUrl(_url: string): void {
    if (window.confirm("Dieses Bild löschen?")) {
        fetch("https://bennihirokugis.herokuapp.com/removeUrl?url=" + encodeURI(_url));
        setTimeout(() => { window.location.reload(); }, 500);
    }

}

window.addEventListener("load", function (): void {
    loadUrlsFromDB(document.querySelector("#images"));
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        fetch("https://bennihirokugis.herokuapp.com/addUrl?url=" + encodeURI((document.getElementById("newUrl") as HTMLInputElement).value)); //https://stackoverflow.com/questions/53071851/getting-the-value-from-input-element-in-typescript/53072115
        setTimeout(() => { window.location.reload(); }, 500);
    });

});
