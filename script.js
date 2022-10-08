const signinbtn = document.querySelector(".signinbtn")
const signoutbtn = document.querySelector(".signoutbtn")
const text = document.querySelector("h1")
const form = document.querySelector(".form")



const user = [
    {
        username: "fredrik",
        password: "12345",
    },
    {
        username: "oscar",
        password: "45678",
    },
]

function init() {
    if(localStorage.getItem("isLoggedIn")) {
        renderSucsessful ()
    }

}
init ();

signinbtn.addEventListener("click", function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
   
    for (const number of user) {
        if(username === number.username && password === number.password) {
            localStorage.setItem("isLoggedIn", JSON.stringify(true));
            renderSucsessful ()
            return
        }else
            renderFail ()
    }
});

function renderSucsessful () {
    text.innerText = "Välkommen";
    form.style.display = "none" 
    signoutbtn.style.display ="inline"
}

function renderFail () {
    text.innerText = "Fel lösenord"
}

signoutbtn.addEventListener("click", function(){
    form.style.display = "flex";
    signoutbtn.style.display = "none";
    text.innerText = "Logga in"
    
    localStorage.removeItem("isLoggedIn");
})