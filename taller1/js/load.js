window.onload = function()
{
    // Cargar credenciales del usuario
    document.getElementById('name').innerHTML = "Nombre: " + this.localStorage.getItem("name");
    document.getElementById('username').innerHTML = "Username: " + this.localStorage.getItem("username");
    document.getElementById('email').innerHTML = "Email: " + this.localStorage.getItem("email");
    var id = this.localStorage.getItem("id");
    document.getElementById('id').innerHTML = id;

    // Cargar ilustraciones del usuario
    var requestURL = 'https://raw.githubusercontent.com/ElRomero123/dwa_talleres_JuanPabloRomeroLondono_2018/master/ilustrations.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

   

    request.onload = function() 
    {
        var superHeroes = request.response;
        var array = superHeroes['users'];

        
        //var userIlustrations = array[int.parse(id)].ilustrations;

        var userIlustrations = array.find(function(element) 
        {
             return element = id;
        });

        console.log(id);

        console.log(userIlustrations);

        /*
        for(var i = 0; i < userIlustrations.length; i++)
        {
            alert(userIlustrations[i].name);
        }
        */
    }

    document.getElementById('close').onclick = function() 
    {  
        document.location.href = "index.html";
        localStorage.clear();
    }
}