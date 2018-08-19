window.onload = function()
{
    // Cargar credenciales del usuario
    document.getElementById('name').innerHTML = "Nombre: " + this.localStorage.getItem("name");
    document.getElementById('username').innerHTML = "Username: " + this.localStorage.getItem("username");
    document.getElementById('email').innerHTML = "Email: " + this.localStorage.getItem("email");
    var id = this.localStorage.getItem("id");
    document.getElementById('id').innerHTML = id;
    // Cargar credenciales del usuario

    // Cargar ilustraciones del usuario
    var requestURL = 'https://raw.githubusercontent.com/ElRomero123/dwa_talleres_JuanPabloRomeroLondono_2018/master/ilustrations.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() 
    {
        var info = request.response;
        var ilustrations = info.users;

        var IlustrationsUser = ilustrations.filter(function(element) 
        {
             return element.id == id;
        });

        var ilustrations = IlustrationsUser[0].ilustrations;
        var size = ilustrations.length;

        for (var i = 0; i < size; i++)
        {
            loadIlustration(ilustrations[i]);
        }
    }
    // Cargar ilustraciones del usuario

    // Cerrar sesión
    document.getElementById('close').onclick = function() 
    {  
        document.location.href = "index.html";
        localStorage.clear();
    }
    // Cerrar sesión 
}

function loadIlustration(infoIlustration)
{
    document.getElementById('contentCard').innerHTML += '<div class="card"> <img class="card-img-top" src="../taller1/img/users/' + infoIlustration.location + '" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">' + infoIlustration.name + '</h5> <p class="card-text"><small class="text-muted">' + infoIlustration.date + '</small></p> </div> </div>';
}