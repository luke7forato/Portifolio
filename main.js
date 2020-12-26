const doc = document.getElementById('everything');


function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }


doc.onscroll =  function() {
    const buttonDiv = document.getElementById('btn-div');
    const check = checkVisible(buttonDiv);
    if(check === false) {
        buttonDiv.innerHTML = '<button class="button-side" id="btn"><i class="fab fa-whatsapp"></i></button>'
        
    } else {
        buttonDiv.innerHTML = '<button class="btn" id="btn">Clique aqui  <i class="fab fa-whatsapp"></i></button>'

    }    
};
