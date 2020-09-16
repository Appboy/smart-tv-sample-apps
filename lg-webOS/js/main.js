var checkTime;

//Initialize function
var init = function () {
  var logLG = document.getElementById("logLG");
  var logSmartTv = document.getElementById("logSmartTv");

  function focusNextButton() {
    if (document.activeElement === logLG) {
      logSmartTv.focus();
    } else {
      logLG.focus();
    }
  }

  function clickFocusedButton() {
    if (document.activeElement === logLG) {
      logLG.click();
    } else if (document.activeElement === logSmartTv) {
      logSmartTv.click();
    }
  }

  // add eventListener for keydown
  document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
      case 37: //LEFT arrow
        focusNextButton();
        break;
      case 38: //UP arrow
        focusNextButton();
        break;
      case 39: //RIGHT arrow
        focusNextButton();
        break;
      case 40: //DOWN arrow
        focusNextButton();
        break;
      case 13: //OK button
        clickFocusedButton();
        break;
      default:
        console.log("Key code : " + e.keyCode);
        break;
    }
  });
};
// window.onload can work without <body onload="">
window.onload = init;
