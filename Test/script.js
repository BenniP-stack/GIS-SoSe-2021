"use strict";
async function communicate(_url) {
    let response = await fetch(_url);
    //console.log("Response", response);
    let antwort = await response.json();
    console.log(antwort);
}
// console.log("Start");
// communicate("https://hs-furtwangen.github.io/GIS-SoSe-2021/content/2-chapter/L2.5/test.txt");
// console.log("End");
communicate("https://hs-furtwangen.github.io/GIS-SoSe-2021/content/2-chapter/L2.5/testjson.json");
//# sourceMappingURL=script.js.map