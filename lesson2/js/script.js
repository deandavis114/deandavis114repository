 /* IIFE to avoid collisions with global namespace */
 (function () {

    // Put current year in inner text of appropriate element
    document.getElementById("copyright-year").innerText = new Date().getFullYear();
 
 })();