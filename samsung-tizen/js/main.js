var checkTime;

//Initialize function
var init = function () {
  var logSamsung = document.getElementById("logSamsung");
  var logSmartTv = document.getElementById("logSmartTv");

  function focusNextButton() {
    if (document.activeElement === logSamsung) {
      logSmartTv.focus();
    } else {
      logSamsung.focus();
    }
  }

  function clickFocusedButton() {
    if (document.activeElement === logSamsung) {
      logSamsung.click();
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
      case 10009: //RETURN button
        tizen.application.getCurrentApplication().exit();
        break;
      default:
        console.log("Key code : " + e.keyCode);
        break;
    }
  });
};
// window.onload can work without <body onload="">
window.onload = init;
