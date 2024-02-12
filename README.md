# with-rn-image-crop-picker

Expo config plugin for [react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker).

## Why a fork?

The original package(<https://github.com/mwegener-com/with-rn-image-crop-picker>) appears to no longer be actively maintained, so I forked it to make small updates

## About

This plugin adds the required attributes to the specific files as mentioned in the [docs.](https://github.com/ivpusic/react-native-image-crop-picker#step-3)

### iOS

InfoPlist:

- `NSPhotoLibraryUsageDescription`
- `NSCameraUsageDescription`
- `NSMicrophoneUsageDescription`

### Android

AndroidManifest: `<uses-permission android:name="android.permission.CAMERA"/>`

Project build.gradle:

- `maven { url 'https://maven.google.com' }`
- `maven { url "https://www.jitpack.io" }`

App build.gradle `vectorDrawables.useSupportLibrary = true`

## Important note

Currently there is no full support for front-camera on android.

## Usage

1. Install with Expo

```sh
expo install @luccasr73/with-rn-image-crop-picker
```

2. Check your app.json. It should look like this:

```json
 "plugins": [
      "@luccasr73/with-rn-image-crop-picker"
    ],
```

3. Run prebuild

```sh
expo prebuild
expo run:ios --device
expo run:android --device
```

## Configuration

You can configure the iOS messages by adding the following props to your app.json file:

- PhotoLibraryUsageDescription
- CameraUsageDescription
- MicrophoneUsageDescription

Example:

```json
"plugins": [
  [
  "@luccasr73/with-rn-image-crop-picker",
  {
   "PhotoLibraryUsageDescription": "Allow app XYZ to access your photos",
   "CameraUsageDescription": "Allow app XYZ to access your camera",
   "MicrophoneUsageDescription": "Allow app XYZ to access your microphone"
  }
 ]
]
```

## Contributing

Contributions are very welcome!

## Support

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/mwegener)
