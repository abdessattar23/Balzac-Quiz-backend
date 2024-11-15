// elements that we dont want
let noMore = JSON.parse(localStorage.getItem("noMore"));

// getting elemennts
let rapportContainer = document.querySelector(".rapport");
// rapport object
let rapport = JSON.parse(localStorage.getItem("userQuests"));
console.log(rapport);  
// getting quests and data from local storage
let allQuests = rapport.quests;
// print score and level 
// print level
let level = localStorage.getItem("userLevel");
      // level changes
      let niveau = "A1";
      if (level == 1){
          niveau = "A1";
      } else if (level == 2){
          niveau = "A2";
      }else if (level == 3){
          niveau = "B1";
      }else if (level == 4){
          niveau = "B2";
      } else if (level == 5){
          niveau = "C1";
      } else if (level == 6){
          niveau = "C2";
      }
document.querySelector(".rapport-score").textContent = localStorage.getItem("userScore") + '/10';
document.querySelector(".rapport-level").textContent = niveau ;

// show the data from local storage to rapport page
allQuests.forEach((q,i)=>{
    // if the answer is not correct
     if (rapport.selectedAns[i] == -1){  // the is no answer(count down over)
        rapportContainer.innerHTML += `
         <div class="quest-box">
            <h2 class="rapport-quest">${q}</h2>
           <h3>Votre Reponse: <span class="correct" style="color:red;">No reponse</span></h3>
           <h3>Correct Reponse: <span class="false" style="color:green;">${rapport.answers[i][rapport.correctAns[i]]}</span></h3>  
           </div>
    `
    } else if (rapport.selectedAns[i] != rapport.correctAns[i]){
        rapportContainer.innerHTML += `
         <div class="quest-box">
            <h2 class="rapport-quest">${q}</h2>
           <h3>Votre Reponse: <span class="correct" style="color:red;">${rapport.answers[i][rapport.selectedAns[i]]}</span></h3>
           <h3>Correct Reponse: <span class="false" style="color:green;">${rapport.answers[i][rapport.correctAns[i]]}</span></h3>  
           </div>
    `
    } else  { //if the answer is correct
        rapportContainer.innerHTML += `
        <div class="quest-box">
           <h2 class="rapport-quest">${q}</h2>
          <h3>Votre Reponse: <span class="correct" style="color:green;">${rapport.answers[i][rapport.selectedAns[i]]}</span></h3>
          <h3>Correct Reponse: <span class="false" style="color:green;">${rapport.answers[i][rapport.correctAns[i]]}</span></h3>  
          </div>
   `
    }
    
})

// no more items


noMore.forEach((no,index)=>{
    if (no == 3){
    document.querySelector(".rapport-score").textContent = "NO";
    }
    if (no == 4){
    document.querySelector(".rapport-level").textContent = "NO" ;
    }
    if (no == 0){
        rapportContainer.innerHTML = "";
        allQuests.forEach((_,i)=>{
            rapportContainer.innerHTML += `
         <div class="quest-box">
            <h2 class="rapport-quest">No Quests</h2>
           <h3>Votre Reponse: <span class="correct" style="color:red;">${rapport.answers[i][rapport.selectedAns[i]]}</span></h3>
           <h3>Correct Reponse: <span class="false" style="color:green;">${rapport.answers[i][rapport.correctAns[i]]}</span></h3>  
           </div>
    `
        })
    }
    if (no == 1){
        rapportContainer.innerHTML = "";
        allQuests.forEach((q,i)=>{
            rapportContainer.innerHTML += `
         <div class="quest-box">
            <h2 class="rapport-quest">${q}</h2>
           <h3>Votre Reponse: <span class="correct" style="color:red;">No Ans</span></h3>
           <h3>Correct Reponse: <span class="false" style="color:green;">${rapport.answers[i][rapport.correctAns[i]]}</span></h3>  
           </div>
    `
        })
    }
    if (no == 2){
        rapportContainer.innerHTML = "";
        allQuests.forEach((q,i)=>{
            rapportContainer.innerHTML += `
         <div class="quest-box">
            <h2 class="rapport-quest">${q}</h2>
           <h3>Votre Reponse: <span class="correct" style="color:red;">${rapport.answers[i][rapport.selectedAns[i]]}</span></h3>
           <h3>Correct Reponse: <span class="false" style="color:green;">No Ans</span></h3>  
           </div>
    `
        })
    }
})
console.log(noMore)
// download rapport
var element = document.getElementById("body");
console.log(html2pdf(element))