
function sortByProperty(_property: any) {  //https://medium.com/@asadise/sorting-a-json-array-according-one-property-in-javascript-18b1d22cd9e9
    return function (_a: any, _b: any) {
        if ((_a[_property] as number) > (_b[_property] as number))
            return 1;
        else if ((_a[_property] as number) < (_b[_property] as number))
            return -1;
        return 0;
    };
}


async function getScores(_output: HTMLElement) {

    let result: Response = await fetch("https://bennihirokugis.herokuapp.com/getScore");
    let allUrls: any = await result.json();


    console.log(allUrls);
    console.log(allUrls.sort(sortByProperty("time")));

    let table: HTMLTableElement = document.createElement("table");
    table.className = "scoreTable";
    let tableBody: HTMLTableSectionElement = document.createElement("tbody");
    table.appendChild(tableBody);

    for (let i: number = 0; i <= (allUrls.length - 1); i++) {
        let tr: HTMLTableRowElement = document.createElement("tr");
        tableBody.appendChild(tr);
        let td: HTMLTableDataCellElement = document.createElement("td");
        let fieldButton: HTMLElement = document.createElement("div");
        fieldButton.className = ".scorePlayer";
        fieldButton.innerHTML = allUrls[i].name;
        td.appendChild(fieldButton);

        let tdtime: HTMLTableDataCellElement = document.createElement("td");
        let divtime: HTMLElement = document.createElement("div");
        divtime.className = ".scoreTime";
        divtime.innerHTML = allUrls[i].time;
        tdtime.appendChild(divtime);



        tr.appendChild(td);
        tr.appendChild(tdtime);
    }

    console.log(allUrls[0]);
    _output.appendChild(table);

}


window.addEventListener("load", function (): void {

    getScores(document.querySelector("#scoreboard"));

});
