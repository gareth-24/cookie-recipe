// User Interface Logic
window.onload = function() {
  let body = document.querySelector("body");
  let darkmode = document.getElementbyId("darkmode");
    darkmode.onclick = function(){
      body.style.backgroundColor = "black";
      body.style.color = "white";
    };
  };
  // let h1 = document.querySelector("h1");
  // h1.onmouseover = function() {
  //   window.alert("I am a heading element.");
  // };

  // let p = document.querySelector("p");
  // p.onmouseover = function() {
  //   document.querySelector("p>em").innerText = "Don't be surprised";
  // };

  // let img = document.querySelector("img");
  // img.onmouseover = function() {
  //   img.style.height = "700px";
  // };
