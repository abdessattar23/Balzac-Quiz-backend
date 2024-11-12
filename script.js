
// test data
let arr = [{
    name : "ahmed",
    id : "123",
    niveau : 3,
    catégorie : {gramm : false , vocab : false , compreh : false},
    tests : [{
            dificulty: 1,
            attempts: 1,
            category: "grammar",
            date:1731424704230  ,
            score: 0
}]
    },
    {
        name : "yassin",
        id : "1233",
        niveau : 2,
        catégorie : {gramm : false , vocab : false , compreh : false},
        tests : [{
                dificulty: 1,
                attempts: 1,
                category: "grammar",
                date:  1731424739919,
                score: 7
     } ]
        }
];
// for default users are shown by the last test
arr.sort((a,b)=> a.tests[0].date);
// level changes
let level = "A1";
if (arr.niveau == 1){
    level = "A1";
} else if (arr.niveau == 2){
    level = "A2";
}else if (arr.niveau == 3){
    level = "B1";
}else if (arr.niveau == 4){
    level = "B2";
} else if (arr.niveau == 5){
    level = "C1";
} else if (arr.niveau == 6){
    level = "C2";
}
// start the funcs
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
              <button class="bg-blue-500 text-white px-3 py-1 rounded">Télécharger</button>
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
    // check level
        if (level != niveau.value){
            document.querySelectorAll(".data")[index].classList.add("hidden");
        } else {
            document.querySelectorAll(".data")[index].classList.remove("hidden");

        }
    })
})

// search function by date
let dateBox = document.querySelector(".dateBox");
dateBox.addEventListener("change",()=>{
   if (dateBox.value == "latest"){
    tableData.innerHTML = "";

        // sort by the latest
       let last =  arr.sort((a,b)=> a.tests[0].date - b.tests[0].date);
       
       last.forEach((user) =>{
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
               <button class="bg-blue-500 text-white px-3 py-1 rounded">Télécharger</button>
             </td>
           </tr>
       
       `
       })
   } else { }
})
console.log(arr);

console.log(new Date(arr[0].tests[0].date))
console.log(new Date(arr[1].tests[0].date))