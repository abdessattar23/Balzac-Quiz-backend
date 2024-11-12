let user = [
    {
        name : "ahmed",
        id : "1234",
        niveau : "A1",
        catégorie : {gramm : false , vocab : false , compréh : false},
        score: 0,
        test : []
    }
]

function check_user(){
    let logged_user;

    for (let i = 0; i < user.length; i++) {
        if (user[i].name === user_name && user[i].id === id) {
            logged_user = user[i];
            return logged_user;
        }
        else{
            add_user()
        }
    }

}

let user_name = document.getElementById("user_name").value ;

function add_user(user_name, id){
    let new_user = {
        name : user_name,
        id : generate_id(),
        niveau : "A1",
        catégorie : {grammaire : false , vocabulaire : false , compréhsion : false},
        score : 0,
    }
    user.push(new_user);
    console.log(user);
}
function generate_id(){
    
    for(let number = 10000; number <= 19999; number++){
        let unique_id = Math.floor(Math.random() * number);
        console.log(unique_id);
        for(let i = 0; i < user.length; i++){
            id_exist = false;
            if(user[i].id === unique_id){
                id_exist = true;
                generate_id();
            }
            else{
                return unique_id;
            }
        }
    }
}

let submit = document.getElementById("btn_submit");
submit.addEventListener('click', ()=>{ 
    // console.log(user_name !== "")
        // if(user_name !== ""){
            // console.log("condition");
            let identifiant = document.getElementById("id_generer");
            let id = generate_id();
            document.getElementById("identifiant").value = id;
            let message = document.createElement("p");
            message.textContent = "Conservez votre identifiant pour vos prochaines connexions.";
            identifiant.appendChild(message);

    // }
},{once : true})

let ccontainerrr