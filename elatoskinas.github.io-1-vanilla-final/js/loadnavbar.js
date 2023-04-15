$(function(){
    $("header").load("navbar.html", function()
    {
        var link = window.location.href;
        link = link.substr(link.lastIndexOf('/')+1);

        if (link === "")
            link = "index.html";

        var linkObj = $("header a[href='" + link + "']");
        linkObj[0].dataset.current = true;
        console.log(linkObj);
    });
});