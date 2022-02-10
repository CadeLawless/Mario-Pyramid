pyramidSymbol();

function slider(){
  let height = document.getElementById("height");
  let sliderNum = document.getElementById("slider-num");
  sliderNum.innerHTML = height.value;
}
function determineHeightAndThenDrawPyramid(x, y){
  let clear = document.getElementById("pyramid");
  clear.innerHTML = "";
  let height = document.getElementById("height");
  printPyramid(height.value,x);
}
function printPyramid(height, x) {
  let str = x;
  let count = 0;
  for(let i=0; i<height; i++){
    let space = "";
    count += 1;
    spaces = height - count; 
    for(let i=0; i<spaces; i++){
      space += "\xa0";
    }
    str += x;
    line = space + str;
    let rowStr = document.createElement("p");
    let node = document.createTextNode(`${line}`);
    rowStr.appendChild(node);
    let element = document.getElementById("pyramid");
    element.appendChild(rowStr);
  }
}

function pyramidSymbol(){
  let symb = document.getElementById("symbol");
  determineHeightAndThenDrawPyramid(symb.value);
}