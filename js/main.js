//-----------------------------------------//
// Program: Road Sign Test				   //
// Filename: main.js					   //
// Developer: Hunter A. McCabe			   //
// Date last modified: [2019.05.13]		   //
//-----------------------------------------//

//String Formatting Function
String.prototype.format = function() {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k])
  }
  return a
}

//Constants
const ES = ""; //Empty String
const BR = "<br />"; //line break tag
const PA = "<p />"; //paragraph break tag
const SP = " "; //space
const PR = "."; //period

//JavaScript Code Goes Here



//Scrolling Title
var titleText = document.title + " -- ";
function titleMarquee() {
 titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
 document.title = titleText;
 setTimeout("titleMarquee()", 450);
 }
titleMarquee();
