let rows = prompt('How many rows? ');
printPyramid(rows);
function printPyramid(height) {
  let str = "#";
  let count = 0;
  for(let i=0; i<height; i++){
    let space = "";
    count += 1;
    spaces = height - count; 
    for(let i=0; i<spaces; i++){
      space += " ";
    }
    str += '#';
    console.log(space + str);
  }
}