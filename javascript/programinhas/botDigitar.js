/* código definitivo */
var inputParaDigitar = document.getElementById("inputfield");
inputParaDigitar.onkeyup = function (){
    
    var count = 0;
    var myInterval = setInterval(function(){digitar() }, 1000);

    function digitar() {
        var word = document.getElementsByClassName("highlight");
        
        var e = new Event("keydown");
        e.key = "a";
        e.keyCode = e.key.charCodeAt(0);
        e.which = e.keyCode;
        e.alterKey = false;
        e.ctrlKey = true;
        e.shiftKey = false;
        e.metaKey = false;
        e.blubbles = true;
        document.dispatchEvent(e);
        
        
        count++;
        console.log(count);
        if(count == 3){
            clearInterval(myInterval);
            console.log("Contador finalizado");
        }
    }
        
        
};

/* fim código definitivo */



var word = document.getElementsByClassName("highlight");
console.log(word);
word = word[0].textContent;
console.log(word);




var inputDigitando = document.getElementById("inputfield");
inputDigitando.value = inputDigitando.valueOf();
//inputDigitando.value = "a";

inputDigitando.onkeyup = function (){
    var word = document.getElementsByClassName("highlight");
    word = word[0].textContent;
    inputDigitando.value += word
};



var e = new Event("keydown");
e.key = "a";
e.keyCode = e.key.charCodeAt(0);
e.which = e.keyCode;
e.alterKey = false;
e.ctrlKey = true;
e.shiftKey = false;
e.metaKey = false;
e.blubbles = true;
document.dispatchEvent(e);


