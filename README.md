# with-rn-image-crop-picker

Expo config plugin for react-native-image-crop-picker.
Requires Expo Dev Client

# Installation

1. Install from NPM

```
npm install with-rn-image-crop-picker
```

2. Add to app.json

```
 "plugins": [
      "with-rn-image-crop-picker"
    ],
```

3. Rebuild your app

```
$ expo prebuild
$ expo run:ios --device
```

# Configuartion

You can configure the iOS messages by adding the following props:

- PhotoLibraryUsageDescription
- CameraUsageDescription
- MicrophoneUsageDescription

Example:

```javascript
"plugins": [
		[
			"with-rn-image-crop-picker",
			{
				"PhotoLibraryUsageDescription": "Allow app XYZ to access your photos",
				"CameraUsageDescription": "Allow app XYZ to access your camera",
        "MicrophoneUsageDescription": "Allow app XYZ to access your microphone"
			}
		]
	],
```

# Contributing

Contributions are very welcome!
