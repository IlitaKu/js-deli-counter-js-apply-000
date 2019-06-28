var katzDeliLine = [];
function takeANumber(curentLine, name){
  var currentLine = [];
  curentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine + 1} in line.`; 
}
var i = 0;
function nowServing(katzDeliLine){
    if (katzDeliLine < 0){
    return "There is nobody waiting to be served!";
  } else {
     return "Currently serving " + katzDeliLine.shift()+".";
}
}


function currentLine(line){
  var newLine =[];
  var i = 0;
  if (!line.length{
  return"The line is currently empty.";
  } else{
    newLine.push(` ${i+1}. ${line[i]}.`);
 return "The line is currently:"+ newLine.join(',');
}
}