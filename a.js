

let guess = (Math.floor(Math.random()*100)+1);
count=0;

function funcbut(){
    
    var inp = document.getElementById("inpid").value;
    count++;
    // alert(inp+"."+guess);
    if (inp<guess){
        document.getElementById("head").innerHTML="make a higher guess";
        document.getElementById("three").innerHTML=count+" guesses completed";
    }
    else if(inp>guess){
        document.getElementById("head").innerHTML="make a lower guess";
        document.getElementById("three").innerHTML=count+" guesses completed";

    }
    else {
        document.getElementById("head").innerHTML="you won";
        document.getElementById("one").innerHTML="Yeahh.. You won it !!";
        document.getElementById("two").innerHTML="The Number was "+guess;
        document.getElementById("three").innerHTML="You guessed it in "+count+" Guesses";
        }}
