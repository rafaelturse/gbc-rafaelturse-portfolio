/* show and hide when scroll */
var prevScrollpos = window.pageYOffset;
    
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("topMenu").style.top = "0";
    } else {
        document.getElementById("topMenu").style.top = "-100px";
    }
    
    prevScrollpos = currentScrollPos;
}