"use strict";
let formData = new FormData(document.forms[0]);
for (let entry of formData) {
    console.log(entry);
    console.log("name: " + entry[0]);
    console.log("value: " + entry[1]);
}
//# sourceMappingURL=script.js.map