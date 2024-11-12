// get final score
let finalScore = localStorage.getItem("totalScore");
// show final score
if (finalScore != null) {
document.querySelector(".resultat").innerHTML = `${finalScore}/10`;
}
let frenchLevel = document.querySelector(".nivau");
let resultBox = document.querySelector(".result-box");
// add the french level by score+ change box color
let grade;
if (finalScore <= 3) {
    frenchLevel.innerHTML = "A1";
    resultBox.style.backgroundColor = "red"
    grade = "A1";
} else if (finalScore > 3 && finalScore <= 5) {
    frenchLevel.innerHTML = "A2";
    resultBox.style.backgroundColor = "#ff2f18"
    grade = "A2";
} else if (finalScore > 5 && finalScore <=7){
    frenchLevel.innerHTML = "B1";
    resultBox.style.backgroundColor = "#fd7c08"
    grade = "B1";
} else if (finalScore > 7 && finalScore <=9){
    frenchLevel.innerHTML = "B2";
    resultBox.style.backgroundColor = "#80ff00"
    grade = "B2";
}else if (finalScore > 9){
    frenchLevel.innerHTML = "C1";
    grade = "C1";
}

localStorage.setItem("grade",JSON.stringify(grade));
// add the final score to local storage
var allScores = JSON.parse(localStorage.getItem("allScores")) || {scores: [], level: []};
var saveButton = document.querySelector(".save");
saveButton.addEventListener("click",()=>{
    allScores.scores.push(finalScore);
    allScores.level.push(frenchLevel.textContent);
localStorage.setItem("allScores",JSON.stringify(allScores));
window.location.href = "./index.html";
})
