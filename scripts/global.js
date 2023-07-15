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

function expandNav()
{
    if (window.screen.width >= "768px")
    {
        expand = document.getElementById("sidebarNav");
        expand.style.width = "fit-content";
        expand.style.display = "inline";
    }
}