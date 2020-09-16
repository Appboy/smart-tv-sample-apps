var appboy = window.appboy;

appboy.initialize("c9fce17f-fe9d-42b8-be54-8f35ac216eb2", {
  baseUrl: "sondheim.braze.com",
  enableHtmlInAppMessages: true,
  doNotLoadFontAwesome: true,
  enableLogging: true,
  disablePushTokenMaintenance: true,
  manageServiceWorkerExternally: true,
  // change this to allow in-app messages to trigger more frequently
  minimumIntervalBetweenTriggerActionsInSeconds: 10,
});
appboy.wipeData();

appboy.subscribeToInAppMessage(function (inAppMessage) {
  console.log("Received new message: ", inAppMessage);

  // Handle in-app message display here. For simplicity, we're just displaying the message text on the screen.
  var messageDisplay = document.getElementById("messageDisplay");
  var message = "Received new ";
  if (inAppMessage instanceof appboy.ModalMessage) {
    message += "modal message: ";
  } else if (inAppMessage instanceof appboy.FullScreenMessage) {
    message += "full-screen message: ";
  }
  messageDisplay.innerText = message + inAppMessage.message;

  // fade out message after 7 seconds
  setTimeout(function () {
    messageDisplay.style.opacity = 0;

    // reset message display after it's faded out
    setTimeout(function () {
      messageDisplay.innerText = "";
      messageDisplay.style.opacity = 1;
    }, 1000);
  }, 7000);
});

appboy.changeUser("LG_test");
appboy.openSession();

function logLG() {
  appboy.logCustomEvent("LG");
}

function logSmartTv() {
  appboy.logCustomEvent("smart_tv");
}
