﻿function BackColor(color) {
    var myText = document.getElementById("US1originalText").value;    
    document.getElementById("greenBackground").value = myText;
    document.getElementById("greenBackground").style.backgroundColor = color;
};

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}
String.prototype.bold = function () {
    return this.bold();
}
function ReverseMyText() {
    var myText = document.getElementById("US5originalText").value;
    var reversed = myText.reverse();
    document.getElementById("reversedText").value = reversed;
};

