// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = '#ffffff';
let table = document.getElementById("grid");
let tableRow = document.getElementsByTagName("tr");


// Add a row
function addR() {

    //checks if there are no rows if so there are also no columns
    if (numRows === 0){
        numCols = 0;
    }

    //add a row to the table and increment numRows
    numRows += 1;
    addRow = table.insertRow();

    //then add a cell to the row for num of columns
    let addCol;
    for(let i=0; i<= numCols; i++){
        addCol = addRow.insertCell();
    }
}

// Add a column
function addC() {
    
    //checks if there are no rows if so runs addR() to add a row
    //and then returns to prevent adding a column
    if (numRows === 0){
        addR();
        return;
    }

    //add a column to the table and increment numCols
    numCols += 1;

    //then add a cell to the row for num of rows
    for (let i = 0; i < tableRow.length; i++) {
        let newCell = tableRow[i].insertCell();
    }
}

// Remove a row
function removeR() {

    //checks if there are no rows if so returns to prevent negative rows
    if (numRows === 0){
        return;
    }

    //remove a row from the table and decrement numRows
    numRows -= 1;
    table.deleteRow(-1);
}

// Remove a column
function removeC() {

    //checks if there are no columns if so returns to prevent negative columns
    //and removes all rows to reset the table
    if (numCols === 0){
        numRows=0;
        while(table.rows.length > 0){
            table.deleteRow(0);
        }
        return;
    }

    //remove a column from the table and decrement numCols
    numCols -= 1;
    for (let i = 0; i < tableRow.length; i++) {
        tableRow[i].deleteCell(-1);
    }

}


// Set global variable for selected color
function selectColor(){
    // Get the selected color from the dropdown menu and wheel
    let selectInput = document.getElementById("selectedColorId");
    let wheelInput = document.getElementById("colorWheelId");
    
    //if colorwheel is chosen use that color
    if (selectInput.value === "COLOR WHEEL"){
        colorSelected = wheelInput.value;
    } else { //else take the color from the dropdown menu and make colorwheel that color
        colorSelected = selectInput.value;
        wheelInput.value = selectInput.value;
    }
    
}

//if color wheel is changed then change the dropdown menu to select and call selectColor()
function selectColorWheel(){
    let selectInput = document.getElementById("selectedColorId");
    selectInput.value = "COLOR WHEEL";
    selectColor();    
}

// Fill all uncolored cells
function fillU(){

    //get all cells in the table
    let cells = document.getElementsByTagName("td");

    //loop through all cells
    for (let i = 0; i < cells.length; i++){
        //if the cell is not colored then color it
        if (!cells[i].style.backgroundColor){
            cells[i].style.backgroundColor = colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){

    //get all cells in the table
    let cells = document.getElementsByTagName("td");

    //loop through all cells
    for (let i = 0; i < cells.length; i++){
        //color all cells
        cells[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll(){

    //get all cells in the table
    let cells = document.getElementsByTagName("td");

    //loop through all cells
    for (let i = 0; i < cells.length; i++){
        //clear all cells
        cells[i].style.removeProperty('background-color');
    }
}