

window.onscroll = function() {scrollFunction()};
window.onresize = function () {rwd_Phone()};

function scrollFunction() {
  if(document.body.clientWidth<1500){
    document.getElementById("logo").style.fontSize = "50px";
    return;
  }
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  // 當使用者向下滑動80px後 縮小導行列
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("MainNavbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("MainNavbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
function rwd_Phone(){
  if(document.body.clientWidth<1500){
    document.getElementById("MainNavbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "50px";
  }
}

