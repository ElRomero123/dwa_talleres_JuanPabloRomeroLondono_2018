window.onload = function()
{
    document.getElementById('login').onclick = function() 
    {  
        var email = document.getElementById('email').value;
        var id = document.getElementById('id').value;
        obtain(email,id);
    }
}

function obtain(email,id)
{
    if(isNaN(id) || id.indexOf('.') != -1)
    {
        document.getElementById('warning').style.display = 'block';
        document.getElementById('warning').innerHTML = "Formato de ID incorrecto!";

        //Esconde los mensajes antiguos.
        document.getElementById('danger').style.display = 'none';
    }

    else
    {
        if(email.indexOf('@') == -1)
        {
            document.getElementById('warning1').style.display = 'block';
            document.getElementById('warning1').innerHTML = "Correo sin @. Formato incorrecto!";

            //Esconde los mensajes antiguos.
            document.getElementById('danger').style.display = 'none';
        }

        else
        {
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(json => validate(email, json))
        }
    }
}

function validate(email, json)
{
    if(json.email == email)
    {
        document.getElementById('success').style.display = 'block';
        document.getElementById('success').innerHTML = "Usuario correcto!";

        document.getElementById('danger').style.display = 'none';
        document.getElementById('warning').style.display = 'none';
        document.getElementById('warning1').style.display = 'none';

        document.location.href = "ilustration.html";
        localStorage.setItem("id", json.id);
        localStorage.setItem("name", json.name);
        localStorage.setItem("username", json.username);
        localStorage.setItem("email", json.email);
    }

    else
    {
        document.getElementById('danger').style.display = 'block';
        document.getElementById('danger').innerHTML = "Usuario incorrecto!";

        //Esconde los mensajes antiguos.
        document.getElementById('warning').style.display = 'none';
        document.getElementById('warning1').style.display = 'none';
    }
}