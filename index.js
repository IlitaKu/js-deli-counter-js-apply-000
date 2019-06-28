var katzDeliLine = [];
function takeANumber(curentLine, name){
  var currentLine = [];
  curentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine + 1} in line.`; 
}

function nowServing(katzDeliLine){
  for ( var i = 0; i<katzDeliLine.length; i++){
    if (katzDeliLine < 0)
    return "There is nobody waiting to be served!";
  }
     console.log(`Curently serving ${katzDeliLine[i]}.`)
     return katzDeliLine.slice(0)
}

function currentLine(line){
  for(var i = 0; i<line.length; i++){
  if (line === 0);
  return"The line is currently empty.";
 }
    var newLine =[];
    newLine.push(`The line is curently: ${i+1}. ${line[i]}.`);
 }    
  
