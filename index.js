var katzDeliLine = [];
function takeANumber(curentLine, name){
  var currentLine = [];
  curentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine + 1} in line.`; 
}

function nowServing(katzDeliLine){
    if (katzDeliLine < 0)
    return "There is nobody waiting to be served!"
  }else{
     return "Curently serving" + katzDeliLine.shift();
}
}

function currentLine(line){
  for(var i = 0; i<line.length; i++){
  if (line === 0);
  return"The line is currently empty.";
    var newLine =[];
    newLine.push(` ${i+1}. ${line[i]}.`);
 } 
 return "The line is curently:"+ newLine.join(',')
}
