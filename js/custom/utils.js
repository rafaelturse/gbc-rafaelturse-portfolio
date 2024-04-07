var translator = document.createElement('script').src = 'translator.js'
var url = document.createElement('script').src = 'url.js'

/* PAGE LOAD */
window.onload = function pageLoad() {
    /* DATA */
    if (window.location.href.includes('#interest')) { doClick('interest') } 
    else if (window.location.href.includes('#focus')) { doClick('focus') } 
    else if (window.location.href.includes('#resume')) { doClick('resume') }

    /* TECHNOLOGY TABLE */
    if (window.location.href.includes('#backend')) { doClick('backend') }
    else if (window.location.href.includes('#frontend')) { doClick('frontend') }
    else if (window.location.href.includes('#database')) { doClick('database') }
    else if (window.location.href.includes('#devops')) { doClick('devops') }
}

/* TEXT */
function showText(itemModifyClass, itemModifyText, text) {
    if (!classExists(itemModifyClass)) {
        doClick(itemModifyClass)
        addClass(itemModifyClass)
    }

    document.getElementById(itemModifyText).innerText = translateByText(text)
}

function hideText(id) { document.getElementById(id).innerText = '' }

/* CLASS */
function addClass(item) { document.getElementById(item).classList.add("active") }
function removeClass(item) { document.getElementById(item).classList.remove("active") }
function classExists(item) { return document.getElementById(item).classList.contains("active") }

/* ACTION */
function doClick(id) { document.getElementById(id).click() }

/* VISIBILITY */
function visibility(item, status) {
    if (status) { document.getElementById(item).style.display = "inline" }
    else { document.getElementById(item).style.display = "none" }
}