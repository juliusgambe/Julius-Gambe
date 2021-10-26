
// Animate the progress bars
$("#progressBarSwift").animate({width: "60%"}, 2000);
$("#progressBarPython").animate({width: "50%"}, 2000);
$("#progressBarHTML").animate({width: "40%"}, 2000);
$("#progressBarCSS").animate({width: "40%"}, 2000);
$("#progressBarJS").animate({width: "20%"}, 2000);

$("#progressBarUIKit").animate({width: "70%"}, 2000);
$("#progressBarFirebase").animate({width: "60%"}, 2000);
$("#progressBarRealm").animate({width: "40%"}, 2000);




// Function to create typing animation

let i = 0;
let text = "Student. Developer."
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