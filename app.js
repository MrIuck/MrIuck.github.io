let buttonState = true;
let buttonState2 = true;

function daynightButton() {
    if (buttonState) {
        var headers = document.getElementById("head1");
        headers.style.color = "black";

        var headers = document.getElementById("head2");
        headers.style.color = "black";

        var headers = document.getElementById("head3");
        headers.style.color = "black";

        document.body.style.color = "black";

        document.body.style.backgroundColor = "white";
    }
    else {
        var headers = document.getElementById("head1");
        headers.style.color = "wheat";

        var headers = document.getElementById("head2");
        headers.style.color = "wheat";

        var headers = document.getElementById("head2");
        headers.style.color = "wheat";

        document.body.style.color = "whitesmoke";

        document.body.style.backgroundColor = "black";
    }
    buttonState = !buttonState;
}

function pauseButton() {
    const audio = document.getElementById("bruh-audio");
	if (audio.paused) {
		audio.play();
	} else {
        audio.pause();
	}
}

function changeLabel1() {
    var dropdown = document.getElementById("weak");
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;
    var description = document.getElementById("description1");
    
    switch(selectedOption) {
      case "Rock Paper Sissors Game":
        description.innerHTML = "Description: Just a simple rock paper sissors game without libarys to test my fundamentals.";
        break;
      case "Non-Vowel Counter":
        description.innerHTML = "Description: Just a simple non-vowel checker without libarys to test my fundamentals.";
        break;
      default:
        description.innerHTML = "Description:";
    }
  }

  function changeLabel2() {
    var dropdown = document.getElementById("median");
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;
    var description = document.getElementById("description2");
    
    switch(selectedOption) {
      case "Personal Static Website":
        description.innerHTML = "Description: Its what your viewing right now.";
        break;
      default:
        description.innerHTML = "Description:";
    }
  }

  function changeLabel3() {
    var dropdown = document.getElementById("strong");
    var selectedOption = dropdown.options[dropdown.selectedIndex].text;
    var description = document.getElementById("description3");
    
    switch(selectedOption) {
      default:
        description.innerHTML = "Description:";
    }
  }