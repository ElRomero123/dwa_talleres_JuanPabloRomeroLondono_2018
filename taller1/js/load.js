window.onload = function()
{
    // Cargar credenciales del usuario
    document.getElementById('name').innerHTML = "Nombre: " + this.localStorage.getItem("name");
    document.getElementById('username').innerHTML = "Username: " + this.localStorage.getItem("username");
    document.getElementById('email').innerHTML = "Email: " + this.localStorage.getItem("email");

    // Cargar ilustraciones del usuario
    var requestURL = 'https://raw.githubusercontent.com/ElRomero123/dwa_talleres_JuanPabloRomeroLondono_2018/master/ilustrations.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() 
    {
        var superHeroes = request.response;
        alert(superHeroes['ilustrations'].length);
    }

    document.getElementById('close').onclick = function() 
    {  
        document.location.href = "index.html";
        localStorage.clear();
    }
}