const fs = require('fs')

var passwords = function(chars, length){
    var chars = chars.split("");
    var index=[];

    (function loop(base, i){
        for(var k=0; k< chars.length; k++) {
            if(i>1) loop(base+chars[k], i-1);
            else index.push(base+chars[k]);
        }
    })("", length)

    return index;
}

var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var length = 2
var index = passwords(possible, length).toString();

fs.writeFile("file.txt", index, (err) => {
  if (err) console.log(err)
})

