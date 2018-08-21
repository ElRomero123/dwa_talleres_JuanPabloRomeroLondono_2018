window.onload = function()
{
    // Tomar datos de usuario en cache
    var name = this.localStorage.getItem("name");
    var username = this.localStorage.getItem("username");
    var email = this.localStorage.getItem("email");
    var id = this.localStorage.getItem("id");
    // Tomar datos de usuario en cache

    // Revisar si se ha iniciado sesión
    if(name != null)
    {
        // Cargar credenciales de usuario
        document.getElementById('name').innerHTML = "Nombre: " + name;
        document.getElementById('username').innerHTML = "Username: " + username;
        document.getElementById('email').innerHTML = "Email: " + email;
        // Cargar credenciales de usuario

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

            array = new Array(size -1);

            for (var i = 0; i < size; i++)
            {
                loadIlustration(ilustrations[i]);
            }
        }
        // Cargar ilustraciones del usuario
    }
    // Revisar si se ha iniciado sesión


    // Indicar si no se tienen los datos del usuario
    else
    {
        document.getElementById('ilustrations').innerHTML = '<h1 class="display-4">Error en la ventana: No se ha iniciado sesión!</h1>';
    }
    // Indicar, si no se tienen los datos del usuario


    // Cerrar sesión
    document.getElementById('close').onclick = function() 
    {  
        document.location.href = "index.html";
        localStorage.clear();
    }
    // Cerrar sesión 

    // Identificar la ilustración y cambiar su estado usando JQuery
    $("#contentCard").on("click", ".btn",
        function()
        {
            var id = $(this).attr("id");
            
            if($(this).attr("class") == "btn btn-outline-warning")
            {
                localStorage.setItem(id,1);
                document.getElementById(id).className = "btn btn-outline-success";
                document.getElementById(id).innerHTML = "Sin realizar!";
            }

            else
            {
                localStorage.setItem(id,0);
                document.getElementById(id).className = "btn btn-outline-warning";
                document.getElementById(id).innerHTML = "Realizado!";
            }
        }
    );
    // Identificar la ilustración y cambiar su estado usando JQuery
}

// Cargar y representar una ilustracion como tarjeta
function loadIlustration(infoIlustration)
{
    var id = infoIlustration.id;
    
    if (localStorage.getItem(id,1) == 1)
    {
        document.getElementById('contentCard').innerHTML += '<div class="card"> <img class="card-img-top" src="../taller1/img/users/' + infoIlustration.location + '" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">' + infoIlustration.name + '</h5> <p class="card-text"><small class="text-muted">' + infoIlustration.date + '</small></p> <button id="' + infoIlustration.id + '"type="button" class="btn btn-outline-success">Sin realizar!</button> </div> </div>';
    }
    else
    {
        document.getElementById('contentCard').innerHTML += '<div class="card"> <img class="card-img-top" src="../taller1/img/users/' + infoIlustration.location + '" alt="Card image cap"> <div class="card-body"> <h5 class="card-title">' + infoIlustration.name + '</h5> <p class="card-text"><small class="text-muted">' + infoIlustration.date + '</small></p> <button id="' + infoIlustration.id + '"type="button" class="btn btn-outline-warning">Realizado!</button> </div> </div>';
    }
}
// Cargar y representar una ilustracion como tarjeta