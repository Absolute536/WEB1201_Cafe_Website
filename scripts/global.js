function changeColourIn()
{
    closeButton = document.getElementById("closeButton");
    closeButton.style.backgroundColor = "#c8b6a6";
    closeButton.style.color = "#d9d9d9";
}

function changeColourOut()
{
    closeButton = document.getElementById("closeButton");
    closeButton.style.color = "#000000";
}

function closeNav()
{
    document.getElementById("sidebarNav").style.width = "0";
    
}

function openNav()
{
    // width of the sidebar navigation is set to a static px value //
    // this is to prevent the content from shifting when the viewport is larger //
    // the sidebar will only be used on smaller (mobile) display, so a static value is fine //
    document.getElementById("sidebarNav").style.width = "150px";
}

/*
This function is to make sure that the navigation links will appear horizontally properly even after the menu button is clicked
Previously, clicking the menu button or the close icon will change the width value of the sidebar using javascript
This will override the values set in the css as the DOM styling have a higher priority than the styles set in css
Therefore, we need to have this along with the onresize event handler (in html) to make sure everything works correctly
Perhaps not the best solution though
*/
function responsiveNav()
{
    let expand = document.getElementById("sidebarNav");

    if ((window.innerWidth >= 768))
    {
        expand.style.width = "fit-content";
    }
    else if (expand.style.width == "fit-content")
    {
        expand.style.width = "0"; // IT'S NOT A BUG, IT'S A FEATURE :)))))
    }
    
}

function initialiseValues()
{
    //sessionStorage.setItem("sign-in", "Log In");
    //sessionStorage.setItem("sign-out", "Log Out");

    if (sessionStorage.getItem("username") == null)
    {
        document.getElementById("logIn--link").innerHTML = "Log In";
    }
    else
    {
        document.getElementById("logIn--link").innerHTML = sessionStorage.getItem("username");
    }
}

function usernameFadeIn()
{
    var logInLink; 
    logInLink = document.getElementById("logIn--link");

    if (logInLink.innerHTML != "Log In")
    {
        logInLink.innerHTML = "Log Out";
    }

    logInLink.addEventListener("mouseout", usernameFadeOut);
}

function usernameFadeOut()
{
    var logInLink;
    logInLink = document.getElementById("logIn--link");

    if (logInLink.innerHTML == "Log Out")
    {
        logInLink.innerHTML = sessionStorage.getItem("username");
    }
}

function logOut(evt)
{
    var logInLink;
    logInLink = document.getElementById("logIn--link");

    if (logInLink.innerHTML == "Log Out")
    {
        logInLink.innerHTML = "Log In";
        sessionStorage.removeItem("username");

        evt.preventDefault();
    }
}