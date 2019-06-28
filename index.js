var katzDeliLine = [];
function takeANumber(curentLine, name){
  var currentLine = [];
  curentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine + 1} in line.`; 
}

function nowServing(katzDeliLine){
  for ( var i = 0; i<katzDeliLine.length; i++){
    if (katzDeliLine ===0)
    console.log("There is nobody waiting to be served!");
  }
     return katzDeliLine[0];

}