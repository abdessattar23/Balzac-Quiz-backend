let admin ={
        name : "admin",
        id : 1234,
    };

let user_list = localStorage.getItem("user_list")
users = (user_list)? JSON.parse(user_list) : []
// let users_list = JSON.parse(localStorage.getItem("user_list")) || [];

// console.log(users)

document.getElementById("btn_connexion").onclick = ()=>{
    let id = parseInt(document.getElementById("identifiant").value);
    let logged_user = check_user(id);
    if(logged_user){
        if (logged_user.id === admin.id) {
        window.location.href = "dashboard.html"; 
        }
        else {
            localStorage.setItem("current_user", JSON.stringify(logged_user));
            window.location.href = "levels.html"; 
        }
    }
}
// find user by id
function check_user(id){
    for (let i = 0; i < users.length; i++) {
        if (users[i] && users[i].id === id) {
            return users[i];
        }
    }
    if (id === admin.id) {
        return admin;
    }
    document.getElementById("erreur_id").style.display = "block";
}
// add a new user
function add_user(user_name, id){
    let new_user = {
        name : user_name,
        id : id,
        niveau : 1,
        categorie : {grammar : false , vocabulary : false , orthograph : false},
        tests: []
    }
    users.push(new_user);
    localStorage.setItem("user_list", JSON.stringify(users));
    console.log(users);
}
// generate l'id
function generate_id(){
    const max_id = 9999, min_id = 1000;
    let unique_id = Math.floor(Math.random() * (max_id - min_id)) + min_id;
    for(let i = 0; i <= users.length; i++){
        if(users[i] && users[i].id === unique_id){
            console.log("in the if")
            return generate_id();
        }
        else{
            return unique_id;
        }
    }
}
// Event pour generer l'id et l'afficher
let submit = document.getElementById("btn_submit");
submit.addEventListener('click', ()=>{ 
    let user_name = document.getElementById("user_name").value;
    let id = generate_id();
    console.log(id);
    if(user_name){
        add_user(user_name, id);
        let signup = document.getElementById("afficher_id");
        signup.innerHTML = "";
        let message = document.createElement("p");
        message.textContent = `Votre identifiant est : ${id}  Conserver le pour se connecter.`;
        signup.appendChild(message);
    }
})

const togglebtn = document.getElementById("toggle");

togglebtn.addEventListener("click",() => {
    console.log("clicked");
    const conection = document.getElementById("user_conexion");
    const inscription = document.getElementById("inscription");
    
    conection.classList.toggle("hide");
    inscription.classList.toggle("hide");
    
    if(conection.classList.contains("hide")){
        togglebtn.textContent = "se Connecter" ;
    }
    else {
        togglebtn.textContent = "inscription" ;
    }
})