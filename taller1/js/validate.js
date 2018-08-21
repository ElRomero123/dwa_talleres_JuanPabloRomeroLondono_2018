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
    // Obtener el resultado de los condicionales
    var condition1 = isNaN(id) || id.indexOf('.') != -1;
    var condition2 = email.indexOf('@') == -1 || email.indexOf('.') == -1;
    // Obtener el resultado de los condicionales

    if(!condition1 && !condition2)
    {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
        .then(json => validate(email, json))
    }
    
    else
    {
        if(condition2)
        {
            document.getElementById('warning1').style.display = 'block';
            document.getElementById('warning1').innerHTML = "Formato de E-mail incorrecto!";

            //Oculta los otros mensajes
            document.getElementById('danger').style.display = 'none';
            document.getElementById('warning').style.display = 'none';
            //Oculta los otros mensajes

            if(condition1)
            {
                document.getElementById('warning').style.display = 'block';
                document.getElementById('warning').innerHTML = "Formato de ID incorrecto!";

                //Oculta los otros mensajes
                document.getElementById('danger').style.display = 'none';  
                //Oculta los otros mensajes
            }
        }

        else
        {
            document.getElementById('warning').style.display = 'block';
            document.getElementById('warning').innerHTML = "Formato de ID incorrecto!";

            //Oculta los otros mensajes
            document.getElementById('danger').style.display = 'none';
            document.getElementById('warning1').style.display = 'none';
        }  
    }
}

function validate(email, json)
{
    if(json.email == email)
    {
        document.location.href = "ilustration.html";
        localStorage.setItem("id", json.id);
        localStorage.setItem("name", json.name);
        localStorage.setItem("username", json.username);
        localStorage.setItem("email", json.email);  
    }

    else
    {
        document.getElementById('danger').style.display = 'block';
        document.getElementById('danger').innerHTML = "Usuario NO encontrado!";

        //Oculta los otros mensajes
        document.getElementById('warning').style.display = 'none';
        document.getElementById('warning1').style.display = 'none';
        //Oculta los otros mensajes
    }
}