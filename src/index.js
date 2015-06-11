"use strict"

var data = "1->5->5->9->10";
var temp = "";
var result = [];

for(var i=0; i<data.length; i++) {

    temp += data[i];

    if(data[i] === '-' || i === data.length-1) {
        result.push(parseInt(temp));
        temp = "";
        i++;
    }
}

console.log(result);
