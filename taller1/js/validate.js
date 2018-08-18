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
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(json => validate(json.email, email))
}

function validate(dbEmail, email)
{
    if(dbEmail == email)
    {
        alert("Usuario correcto");
    }

    else
    {
        alert("Usuario incorrecto");
    }
}