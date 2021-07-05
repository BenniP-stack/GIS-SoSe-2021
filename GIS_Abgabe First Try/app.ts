// let clickedCard = null;


// function onCardClick(e) {
//     const target = e.currentTarget;
//     target.className = target.className.replace("card-passive", "").trim(); //removes whitespace from both sides of a string

//     console.log(target.getAttribute("data-color"));
//     if (!clickedCard) {
//         clickedCard = target;
//     } else if (clickedCard) {
//         if (clickedCard.getAttribute("data-color") === target.getAttribute("data-color")) {
//             clickedCard.className += " done ";
//         }
//     }
// }

// // function onCardClick() {
// //     memoryCard.className = memoryCard.className.replace("card-passive", "").trim();
// // }