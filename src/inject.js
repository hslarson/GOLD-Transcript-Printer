// Perform any preprocessing on the html file before applying stylesheet


// Make sure the major table spans both columns
var major_row = document.querySelector("#content > table:nth-of-type(1) tr:has(> td > #pageContent_MajorList)")
while (major_row.children.length) {

    var child = major_row.children[0]
    var major_list = child.querySelector("#pageContent_MajorList")

    if (major_list) {
        child.setAttribute("colspan", 2)
        child.classList.add("major-table")

        major_row.innerHTML = child.outerHTML
        break;
    }

    major_row.removeChild(child)
}


// Replace print buttons to not create popout window
var nav_div = document.querySelector("#pageContent_titleNavDiv > div:has(> .gold-button)")
if (nav_div) {
    nav_div.innerHTML = "<input type=button onclick=window.print() class=gold-button id=print-button value='Print Transcript' />"
}


"ok" // This will be returned to callback in background.js
