window.onload = function()
{
    document.getElementById('name').innerHTML = "Nombre: " + this.localStorage.getItem("name");
    document.getElementById('username').innerHTML = "Username: " + this.localStorage.getItem("username");
    document.getElementById('email').innerHTML = "Email: " + this.localStorage.getItem("email");
}