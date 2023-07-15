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
    // the sidebar will only be used on mobile display, so a static value is fine //
    document.getElementById("sidebarNav").style.width = "150px";
}

/*
This function is to make sure that the navigation links will appear horizontally properly even after the menu button is clicked
Previously, clicking the menu button or the close icon will change the width value of the sidebar, causing it to appear
incorrectly even it is placed horizontally
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


