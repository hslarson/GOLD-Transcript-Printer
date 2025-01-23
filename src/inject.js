// Pre-process the html file before applying stylesheet

function main() {
    // Find the table that contains degree information
    // In GOLD, this table doesn't span the width of the screen, even though it should
    const major_list = document.querySelector("#pageContent_MajorList");
    if (!major_list) { return "Didn't find element with ID #pageContent_MajorList"; }

    // Find the parent cell of the table
    const parent_cell = major_list.closest("td");
    if (!parent_cell) { return "Couldn't find parent cell of major list"; }

    // Modify attribute to allow cell to span row
    parent_cell.setAttribute("colspan", "2");

    // Find the parent row of this cell
    const parent_row = parent_cell.closest("tr");
    if (!parent_row) { return "Couldn't find parent row of major list"; }

    // Wipe row contents and re-insert the cell we care about
    parent_row.innerHTML = "";
    parent_row.appendChild(parent_cell);


    // Replace print buttons
    // Printing usually opens a pop-out, but we just want to print the page as-is
    const nav_div = document.querySelector("#pageContent_titleNavDiv > div:not(.title)")
    if (!nav_div) { return "Couldn't find div containing print buttons"; }
    nav_div.innerHTML = "<input type=button onclick=window.print() class=gold-button id=print-button value='Print Transcript' />";


    // Add an ID to timestamp cell for efficient CSS selection
    const date_text = document.querySelector("#pageContent_currentDateLabel");
    if (!date_text) { return "Couldn't find timestamp text"; }
    const date_cell = date_text.closest("td");
    if (!date_cell) { return "Couldn't find parent cell of timestamp text"; }
    date_cell.id = "timestampCell"

    return "ok";
}

try {
    main(); // Invoke main function
} catch(error) {
    console.error("Error in inject.js", error);
}
