function Login()
    {
        var username = document.getElementById("user").value;
        var password = document.getElementById("pass").value;
        if(username=="2006"&& password=="2006")
    {
       window.location.href="website.html";
    }
        else
        {
            alert("incorrect to username or password");
        }
    }
    function showpass(checkbox)
    {
        var username = document.getElementById("user");
        var password = document.getElementById("pass");
        if(checkbox.checked==true)
    {
           password.setAttribute("type", "text");
    }
    else
    {
        password.setAttribute("type", "password");
    }
    }