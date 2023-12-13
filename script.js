document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var x = document.getElementById("weixuchecked").checked;
    if(x==true) {
        document.getElementById("result").innerHTML = "you are gay";
    }
    else {
        document.getElementById("result").innerHTML = "you are not gay";
    }
  });