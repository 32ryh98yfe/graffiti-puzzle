function update(e){
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
  
  document.addEventListener('mousemove',update)
  document.addEventListener('touchmove',update)





  
  function hzplay($mp3){
    hz = document.getElementById("hz");
    hz.src = $mp3;
    hz.play();
}




// toast message

window.onload = pageLoad;
    function pageLoad() {
     
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);

    };



    
