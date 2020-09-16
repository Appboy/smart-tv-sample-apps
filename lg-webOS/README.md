# Running the Sample App

## LG Developer Setup

Make sure you have the [webOS TV SDK CLI](http://webostv.developer.lge.com/sdk/installation/) installed.

Follow the steps [here](https://webostv.developer.lge.com/develop/app-test) to create an LG Developer account, enable Developer Mode on your LG TV, and connect your computer to the TV.

Finally, set an environment variable with the name that you used for your TV/emulator when following the setup instructions.

```shell
$ export DEVICE_NAME=YOUR_DEVICE_NAME
```

## Packaging and Installing the App

Build the app from the root directory of the repo:

```shell
$ ares-package .
```

You should now see a file call `com.braze.websdk.test_0.0.1_all.ipk` in the root directory.

Install the app to your TV/emulator:

```shell
$ ares-install --device $DEVICE_NAME ./com.braze.websdk.test_0.0.1_all.ipk
```

The sample app should now be visible in your TV's app drawer.

## Debugging the App

To debug the sample app, run the following command:

```shell
$ ares-inspect --device $DEVICE_NAME --app com.braze.websdk.test --open
```

This command runs the app on your TV/emulator and opens a tab with a Chrome DevTools instance that's connected to the app. In the console, you should see logs for the content cards and in-app messages being received by the SDK.
