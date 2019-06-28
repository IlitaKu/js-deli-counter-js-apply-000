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


  
     
  
