// get final score
let finalScore = localStorage.getItem("totalScore");

let user = JSON.parse(localStorage.getItem("user"));


// show final score
if (finalScore != null) {
document.querySelector(".resultat").innerHTML = `${finalScore}/10`;
}
let frenchLevel = document.querySelector(".nivau");
let resultBox = document.querySelector(".result-box");
// add the french level by score+ change box color


// add the final score to local storage
var allScores = JSON.parse(localStorage.getItem("allScores")) || {scores: [], level: []};
var saveButton = document.querySelector(".save");
saveButton.addEventListener("click",()=>{
    allScores.scores.push(finalScore);
    allScores.level.push(frenchLevel.textContent);
localStorage.setItem("allScores",JSON.stringify(allScores));
window.location.href = "./index.html";
})

const logout = document.querySelector(".save");
logout.addEventListener("click", () => {
    localStorage.removeItem("current_user");
    window.location.href = "index.html";
});