(function () {

    // Put current year in inner text of appropriate element
    document.getElementById("copyrightyear").innerText = new Date().getFullYear();
 
    // Put last modified date in footer
    document.getElementById("lastModifiedDate").innerText = document.lastModified;
 
 })();