
var fs = require('fs');

fs.appendFile("log.txt", "Hey there!\r\n", function(err) {
    if(err) {
        return console.log(err);
    }
    fs.appendFile

    console.log("The log has been updated! @ " + + tid.getFullYear() + "/" +  (tid.getMonth()+1) + "/" + tid.getDate()  + " Klokken er " +  tid.getHours()  + ":" +  tid.getMinutes());
}); 



function doStuff(input: string): string{

        return (input + tid.getFullYear() + "/" +  (tid.getMonth()+1) + "/" + tid.getDate()  + " Klokken er " +  tid.getHours()  + ":" +  tid.getMinutes())
}

var tid = new Date();

var test = doStuff("LAKSE JOHN HAR NOGET I LOMMEN ");
console.log (test);


