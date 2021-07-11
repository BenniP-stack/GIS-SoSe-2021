"use strict";
var Endabgabe;
(function (Endabgabe) {
    async function loadUrlsFromDB(target) {
        let response = await fetch("https://bennihirokugis.herokuapp.com/getUrl");
        if (!response.ok) {
            console.error("Error fetching URLs", response);
        }
        let allUrls = await response.json();
        let table = document.createElement("table");
        table.className = "gameTable";
        let tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
        let tr;
        for (let index = 0; index <= allUrls.length - 1; index++) {
            if ((index % 5 == 0)) {
                tr = document.createElement("tr");
                tableBody.appendChild(tr);
            }
            let td = document.createElement("td");
            let fieldButton = document.createElement("div");
            fieldButton.className = ".gameButton";
            fieldButton.innerHTML = "<img class='memoryImageAdmin' src='" + allUrls[index].url + "'></img>";
            fieldButton.addEventListener("click", function () { removeUrl(allUrls[index].url); });
            td.appendChild(fieldButton);
            tr.appendChild(td);
        }
        target.appendChild(table);
    }
    function removeUrl(_url) {
        if (window.confirm("Dieses Bild löschen?")) {
            fetch("https://bennihirokugis.herokuapp.com/removeUrl?url=" + encodeURI(_url));
            setTimeout(() => { window.location.reload(); }, 500);
        }
    }
    window.addEventListener("load", function () {
        loadUrlsFromDB(document.querySelector("#images"));
        document.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            fetch("https://bennihirokugis.herokuapp.com/addUrl?url=" + encodeURI(document.getElementById("newUrl").value));
            setTimeout(() => { window.location.reload(); }, 500);
        });
    });
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=admin.js.map