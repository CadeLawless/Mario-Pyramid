let elmt = document.getElementById("construction");
elmt.remove();

let rows = prompt('How many rows?');

printPyramid(rows);

function printPyramid(height) {
  let str = "#";
  let count = 0;
  for(let i=0; i<height; i++){
    let space = "";
    count += 1;
    spaces = height - count; 
    for(let i=0; i<spaces; i++){
      space += ".";
    }
    str += '#';
    line = space + str;
    console.log(line);
    let rowStr = document.createElement("p");
    let node = document.createTextNode(`${line}`);
    rowStr.appendChild(node);
    let element = document.getElementById("pyramid");
    element.appendChild(rowStr);
  }
}