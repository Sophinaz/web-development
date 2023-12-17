function check(u,p){
    let user = "admin";
    let pass = "passadmin";
    
    if (document.getElementById("username").value == user) {
        if (document.getElementById("password").value == pass){
            location.href = "main.html"
        }
    }
    else{
        alert("wrong user name or password")
    }
}