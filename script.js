document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var x = document.getElementById("weixuchecked").checked;
    if(x==true) {
        document.getElementById("result").innerHTML = "you are gay";
    }
    else {
        document.getElementById("result").innerHTML = "you are not gay";
    }
    document.body.style.backgroundColor = "#000000";
    window.scrollTo({
        top: 3000,
        left: 0,
        behavior: "smooth"
      });
  });
