// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
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
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}