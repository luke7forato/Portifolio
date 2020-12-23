window.onscroll = function() {scrollOnce()};



let scrolls = 0;


function changeButtonRound() {
    //add one to scroll

    //deletes text button
    const btn = document.getElementById('btn');
    btn.innerHTML = '<button id="btn" class="make-button-round bounce-in-bottom"><i id="icon" class="fab fa-whatsapp"></i></button>';

    //
    const icon = document.getElementById('icon');
    btn.style.width = '45px';
    icon.style.marginLeft = '0px';
  }

  //this code changes the button to round only if the button is scrolled down
  function scrollOnce() {
      if(scrolls === 3) {
          scrolls++;
          changeButtonRound();
      } else {
          scrolls++;
      }
  }