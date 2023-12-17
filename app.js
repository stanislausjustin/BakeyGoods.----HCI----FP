const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");


sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

function validateForm2() 
{
    var x1 = document.forms["signupForm"]["username"].value;
    var x2 = document.forms["signupForm"]["email"].value;
    var x3 = document.forms["signupForm"]["pass"].value;
    
    if (x1=="" || x2=="" || x3=="")
    {
        if (x1 ==="") 
        {
            alert("Name must be filled out");
            return false;
        }
        if (x2 == "" ) 
        {
            alert("Email must be filled out");
            return false;
        }
        if (x3 == "" ) 
        {
            alert("Password must be filled out");
            return false;
        }
    }
    else {
        alert("Your account is successfully created");
        window.location.assign("afterlogin.html");
        return true;
    }
}


function validateForm1() 
{
    var y1 = document.forms["signinForm"]["username"].value;
    var y2 = document.forms["signinForm"]["pass"].value;

    if(y1 != "WeLoveAgri" || y2 != "AgriVeryUseful" )
    {
        alert("Incorrect email or password");
        return false;
    }
    else {
        window.location.href = "afterlogin.html";
        return true;
    }
}