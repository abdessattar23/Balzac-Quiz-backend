
// test data
    let arr = JSON.parse(localStorage.getItem("user-list")) || [];
    // [{
    //     name : "ahmed",
    //     id : "123",
    //     niveau : 3,
    //     catégorie : {gramm : false , vocab : false , compreh : false},
    //     tests : [{
    //             dificulty: 1,
    //             attempts: 1,
    //             category: "grammar",
    //             date: 1731424739919,
    //             score: 0,
    //             rapport: {
    //                 quests:[
    //                     "Complétez la phrase :Je ___ à la maison",
    //                     "Quel est l'article correct pour 'chat' ?",
    //                     "Comment dit-on 'Good morning' en français ?",
    //                     'Choisissez le bon pronom : "Marie et ___ partons demain."',
    //                     'Complétez la phrase : "Il est huit heures ___."',
    //                     "Traduisez 'I like apples':",
    //                     "Complétez : Si j'avais de l'argent, je ___ en voyage.",
    //                     "Quel mot est correct ? C'est un ___ important pour le projet.",
    //                     "Complétez la phrase : Il pleut ___ nous restons à l'intérieur.",
    //                     "Quel est le synonyme de 'rapide' ?"
    //                 ],
    //                 selectedAns :[2,1,1,2,2,0,2,0,1,2],
    //                 correctAns : [1,2,1,0,0,1,2,0,1,1],
    //                 answers: [
    //                     ["a) va", "b) vais","c) vont"],
    //                     ["a) La","b) Les","c) Le"],
    //                     ["a) Bonsoir","b) Bonjour","c) Bonne nuit"],
    //                     ["a) moi","b) je","c) nous"],
    //                     ["a) et demie","b) du soir","c) de soir"],
    //                     ["a) J’aime des pommes","b) J’aime les pommes","c) Je mange des pommes"],
    //                     ["a) vais","b) irai","c) irais"],
    //                     ["a) sujet","b) sujette","c) sujété"],
    //                     ["a) et","b) donc","c) mais"],
    //                     ["a) lent","b) vite ","c) tard"]
    //             ]
    //             },
                
    // }]
    //     },
    //     {
    //         name : "yassin",
    //         id : "1233",
    //         niveau : 2,
    //         catégorie : {gramm : false , vocab : false , compreh : false},
    //         tests : [{
    //                 dificulty: 1,
    //                 attempts: 1,
    //                 category: "grammar",
    //                 date: 1731424704230,
    //                 score: 7,
    //         rapport: {
    //             quests:[
    //                 "Complétez la phrase :Je ___ à la maison",
    //                 "Quel est l'article correct pour 'chat' ?",
    //                 "Comment dit-on 'Good morning' en français ?",
    //                 'Choisissez le bon pronom : "Marie et ___ partons demain."',
    //                 'Complétez la phrase : "Il est huit heures ___."',
    //                 "Traduisez 'I like apples':",
    //                 "Complétez : Si j'avais de l'argent, je ___ en voyage.",
    //                 "Quel mot est correct ? C'est un ___ important pour le projet.",
    //                 "Complétez la phrase : Il pleut ___ nous restons à l'intérieur.",
    //                 "Quel est le synonyme de 'rapide' ?"
    //             ],
    //             selectedAns :[2,1,1,3,2,0,2,0,1,2],
    //             correctAns : [1,2,1,0,0,1,2,0,1,1],
    //             answers: [
    //                 ["a) va", "b) vais","c) vont"],
    //                 ["a) La","b) Les","c) Le"],
    //                 ["a) Bonsoir","b) Bonjour","c) Bonne nuit"],
    //                 ["a) moi","b) je","c) nous"],
    //                 ["a) et demie","b) du soir","c) de soir"],
    //                 ["a) J’aime des pommes","b) J’aime les pommes","c) Je mange des pommes"],
    //                 ["a) vais","b) irai","c) irais"],
    //                 ["a) sujet","b) sujette","c) sujété"],
    //                 ["a) et","b) donc","c) mais"],
    //                 ["a) lent","b) vite ","c) tard"]
    //         ]
    //                 }
    //     } ]
    //         }
    // ];
// start the funcs
// chose what i want in the rapport;

    let radioRapport = document.querySelectorAll(".radio-rapport");
    let checkCount = 0;
    // check all radios
let notChecked = [];
radioRapport.forEach((radio,index) =>{
    radio.addEventListener("change",()=>{
        if (radio.checked){
            checkCount = checkCount+1;
                notChecked.splice(notChecked.indexOf(index),1);
               console.log(notChecked);
        }else  if (!radio.checked) {
            checkCount = checkCount - 1;
            if (notChecked.includes(index) != true){
                notChecked.push(index);
            }
            console.log(notChecked);

        }
        notChecked = notChecked.sort((a,b)=> a -b);
        localStorage.setItem("noMore",JSON.stringify(notChecked));
    })
})

// showing the data
let tableData = document.querySelector(".table-data");
arr.forEach(user =>{
    // level changes
    let niveau = "A1";
    if (user.niveau == 1){
        niveau = "A1";
    } else if (user.niveau == 2){
        niveau = "A2";
    }else if (user.niveau == 3){
        niveau = "B1";
    }else if (user.niveau == 4){
        niveau = "B2";
    } else if (user.niveau == 5){
        niveau = "C1";
    } else if (user.niveau == 6){
        niveau = "C2";
    }
    // printing the date
    let printDate = new Date(user.tests[0].date);
    let day = printDate.getUTCDate();
    let month = printDate.getUTCMonth();
    let year = printDate.getUTCFullYear();
    // print the data
    tableData.innerHTML += `
          <tr class="border-b border-gray-200 hover:bg-gray-100 data">
         <td class="py-3 px-6">${user.name}</td>
            <td class="py-3 px-6">${niveau}</td>
            <td class="py-3 px-6">${user.tests[0].score}</td>
            <td class="py-3 px-6">${day + "/"+ month + "/" + year}</td>
            <td class="py-3 px-6">
              <button class="down bg-blue-500 text-white px-3 py-1 rounded">Télécharger</button>
            </td>
          </tr>

    `

}
)
// search function by name
let searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keyup",()=>{
    arr.forEach((user, i) =>{
        if (user.name.toLowerCase().indexOf(searchBox.value.toLowerCase()) > -1){
            document.querySelectorAll(".data")[i].classList.remove("hidden");
        } else{
            document.querySelectorAll(".data")[i].classList.add("hidden");
        }
    })
})
// search function by level 
let  niveau = document.querySelector(".niveau");
niveau.addEventListener("change",()=>{
    arr.forEach((user,index)=>{
        // level changes
    let level = "A1";
    if (user.niveau == 1){
        level = "A1";
    } else if (user.niveau == 2){
        level = "A2";
    }else if (user.niveau == 3){
        level = "B1";
    }else if (user.niveau == 4){
        level = "B2";
    } else if (user.niveau == 5){
        level = "C1";
    } else if (user.niveau == 6){
        level = "C2";
    }
    // check level
      if (niveau.value == "all"){
        document.querySelectorAll(".data")[index].classList.remove("hidden");
      } else  if (level != niveau.value){
            document.querySelectorAll(".data")[index].classList.add("hidden");
        } else {
            document.querySelectorAll(".data")[index].classList.remove("hidden");

        }
    })
})

// search function by date
let dateBox = document.querySelector(".dateBox");
dateBox.addEventListener("change",()=>{
   if (dateBox.value == "oldest"){
    //    delete every thing to show the sorted one
    tableData.innerHTML = "";

        // sort by the oldest
       let old =  arr.sort((a,b)=> a.tests[0].date - b.tests[0].date);
       old.forEach((user,index) =>{
               // level changes
       let niveau = "A1";
       if (user.niveau == 1){
           niveau = "A1";
       } else if (user.niveau == 2){
           niveau = "A2";
       }else if (user.niveau == 3){
           niveau = "B1";
       }else if (user.niveau == 4){
           niveau = "B2";
       } else if (user.niveau == 5){
           niveau = "C1";
       } else if (user.niveau == 6){
           niveau = "C2";
       }
        // printing the date
            let printDate = new Date(user.tests[0].date);
            let day = printDate.getUTCDate();
            let month = printDate.getUTCMonth();
            let year = printDate.getUTCFullYear();
           // print the data
           tableData.innerHTML += `
           <tr class="border-b border-gray-200 hover:bg-gray-100 data">
          <td class="py-3 px-6">${user.name}</td>
             <td class="py-3 px-6">${niveau}</td>
             <td class="py-3 px-6">${user.tests[0].score}</td>
             <td class="py-3 px-6">${day + "/"+ month + "/" + year}</td>
             <td class="py-3 px-6">
               <button class="down bg-blue-500 text-white px-3 py-1 rounded">Télécharger</button>
             </td>
           </tr>
       
       `
       })
                       // download the rapport
let downloadBtn = document.querySelectorAll(".down");
// download the rapport in date case
downloadBtn.forEach((down,i)=>{
    down.addEventListener("click",()=>{
        localStorage.setItem("userScore",JSON.stringify(arr[i].tests[arr[i].tests.length - 1].score));
        localStorage.setItem("userLevel",JSON.stringify(arr[i].niveau));
        localStorage.setItem("userQuests", JSON.stringify(arr[i].tests[arr[i].tests.length - 1].rapport));
        console.log(arr[i].tests[arr[i].tests.length - 1].score)
        console.log(arr[i].niveau)
        console.log(arr[i].tests[arr[i].tests.length - 1].rapport);
        window.open("./rapport.html");
    })
})
   } else if (dateBox.value == "latest"){

    tableData.innerHTML = "";
        // sort by the latests
        let last =  arr.sort((a,b)=> b.tests[0].date - a.tests[0].date);
        last.forEach((user,i) =>{
                   // level changes
       let niveau = "A1";
       if (user.niveau == 1){
           niveau = "A1";
       } else if (user.niveau == 2){
           niveau = "A2";
       }else if (user.niveau == 3){
           niveau = "B1";
       }else if (user.niveau == 4){
           niveau = "B2";
       } else if (user.niveau == 5){
           niveau = "C1";
       } else if (user.niveau == 6){
           niveau = "C2";
       }
         // printing the date
             let printDate = new Date(user.tests[0].date);
             let day = printDate.getUTCDate();
             let month = printDate.getUTCMonth();
             let year = printDate.getUTCFullYear();
            // print the data
            tableData.innerHTML += `
            <tr class="border-b border-gray-200 hover:bg-gray-100 data">
           <td class="py-3 px-6">${user.name}</td>
              <td class="py-3 px-6">${niveau}</td>
              <td class="py-3 px-6">${user.tests[0].score}</td>
              <td class="py-3 px-6">${day + "/"+ month + "/" + year}</td>
              <td class="py-3 px-6">
                <button class="down bg-blue-500 text-white px-3 py-1 rounded">Télécharger</button>
              </td>
            </tr>
        
        `
        })
                // download the rapport
let downloadBtn = document.querySelectorAll(".down");
// download the rapport in date case
downloadBtn.forEach((down,i)=>{
    down.addEventListener("click",()=>{
        localStorage.setItem("userScore",JSON.stringify(arr[i].tests[arr[i].tests.length - 1].score));
        localStorage.setItem("userLevel",JSON.stringify(arr[i].niveau));
        localStorage.setItem("userQuests", JSON.stringify(arr[i].tests[arr[i].tests.length - 1].rapport));
        console.log(arr[i].tests[arr[i].tests.length - 1].score)
        console.log(arr[i].niveau)
        console.log(arr[i].tests[arr[i].tests.length - 1].rapport);
        window.open("./rapport.html");
    })
})
   }
})
// download the rapport
let downloadBtn = document.querySelectorAll(".down");
// download the in normal case rapport
downloadBtn.forEach((down,i)=>{
    down.addEventListener("click",()=>{
        localStorage.setItem("userScore",JSON.stringify(arr[i].tests[arr[i].tests.length - 1].score));
        localStorage.setItem("userLevel",JSON.stringify(arr[i].niveau));
        localStorage.setItem("userQuests", JSON.stringify(arr[i].tests[arr[i].tests.length - 1].rapport));
        console.log(arr[i].tests[arr[i].tests.length - 1].score)
        console.log(arr[i].niveau)
        console.log(arr[i].tests[arr[i].tests.length - 1].rapport);
        window.open("./rapport.html");
    })
})

const logout = document.getElementById("logoutButton");
logout.addEventListener("click", () => {
    localStorage.removeItem("current_user");
    window.location.href = "index.html";
});
