$(document.getElementById('terminal')).t({
    caret: false
});

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();

      //Create elements
      const p = document.createElement('P');
      const br = document.createElement('BR');
      //Get input and append to new paragraph element
      const text = document.createTextNode(document.getElementById("input").value + '\n');
      let paragraph = p.appendChild(text);
      
      //Append to screen and clear input
      document.getElementById('output').appendChild(paragraph)
      document.getElementById('output').appendChild(br)
      
      checkCommands(document.getElementById("input").value);
      document.getElementById("input").value = "";
    }
  });

  function checkCommands(command){
    if(command === '!youTube'){
        window.location.href = "https://www.youtube.com/";
    }
    else if(command === '!linkedIn'){
        window.location.href = "https://www.linkedin.com/in/felix-j-b8b5a0b0/";
    }
    else if(command === '!wiki') {
        window.location.href = "https://en.wikipedia.org/wiki/Special:Random";  
    }
  }