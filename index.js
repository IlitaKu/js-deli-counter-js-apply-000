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
var katzDeliLine = [];

function currentLine(x) {
    var line = []
    if (x.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}
function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}
function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";



