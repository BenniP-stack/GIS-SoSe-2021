"use strict";
function sortByProperty(_property) {
    return function (_a, _b) {
        if (_a[_property] > _b[_property])
            return 1;
        else if (_a[_property] < _b[_property])
            return -1;
        return 0;
    };
}
async function getScores(_output) {
    let result = await fetch("https://bennihirokugis.herokuapp.com/getScore");
    let allUrls = await result.json();
    console.log(allUrls);
    console.log(allUrls.sort(sortByProperty("time")));
    let table = document.createElement("table");
    table.className = "scoreTable";
    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);
    for (let i = 0; i <= (allUrls.length - 1); i++) {
        let tr = document.createElement("tr");
        tableBody.appendChild(tr);
        let td = document.createElement("td");
        let fieldButton = document.createElement("div");
        fieldButton.className = ".scorePlayer";
        fieldButton.innerHTML = allUrls[i].name;
        td.appendChild(fieldButton);
        let tdtime = document.createElement("td");
        let divtime = document.createElement("div");
        divtime.className = ".scoreTime";
        divtime.innerHTML = allUrls[i].time;
        tdtime.appendChild(divtime);
        tr.appendChild(td);
        tr.appendChild(tdtime);
    }
    console.log(allUrls[0]);
    _output.appendChild(table);
}
window.addEventListener("load", function () {
    getScores(document.querySelector("#scoreboard"));
});
//# sourceMappingURL=score.js.map