window.onload = function() {
    var btnWidth = document.getElementById('buttonStartedWidth');
    var btnHeight = document.getElementById('buttonStartedHeight');
    var posWidth = 0, posHeight = 0;
    var box = document.getElementById('box');
    btnWidth.onclick = function() {
      if (posWidth == 150){
            posWidth = -10;
        }
        if (posWidth <= 150){
            posWidth += 10;
            box.style.left = posWidth+'px';
        }
    }
    btnHeight.onclick = function(){
        if (posHeight == 150){
            posHeight = -10;
        }
        if (posHeight <= 150) {
            posHeight += 10;
            box.style.top = posHeight+'px';
        }
    }
};
