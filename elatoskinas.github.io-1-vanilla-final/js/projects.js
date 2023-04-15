$(function()
{
    console.log("projects.js in action");
    
    // Get project buttons (img children of project div)
    var projectButtons = $(".project").children("img");

    // Get project exit buttons
    var projectExit = $(".project-info-close");

    // Get project-info divs
    var projectInfo = $(".project-info");

    for (let i = 0; i < projectButtons.length; ++i)
    {
        if (i >= projectExit.length || i >= projectInfo.length) // unfinished project div
            break;

        projectButtons[i].onclick = function() {
            projectInfo[i].style.display = "block";
        };

        projectExit[i].onclick = function()
        {
            projectInfo[i].style.display = "none";
        };
    }

    window.onclick = function(event)
    {
        if (event.target.className === "project-info")
        {
            event.target.style.display = "none";
        }
    }
})