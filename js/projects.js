let i = 0;
let text = "Self-taught Developer."
let id = ""

function typeWriter() {
    if (i < text.length) {
       
        if (i === 0){
            document.getElementById("title-sub-header").innerHTML = "";
        }

      document.getElementById("title-sub-header").innerHTML += text.charAt(i);
      i++; 
      setTimeout(typeWriter, 50); 
    } else { 
         
        i = 0 
        setTimeout(typeWriter, 5000) 
        // document.getElementById("title-sub- header").innerHTML = ""
    }
  }

  typeWriter()