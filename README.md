# with-rn-image-crop-picker

Expo config plugin for react-native-image-crop-picker.
Requires Expo Dev Client

# Usage

1. Install with Expo

```sh
$ expo install with-rn-image-crop-picker
```

2. Check your app.json. It should look like this:

```json
 "plugins": [
      "with-rn-image-crop-picker"
    ],
```

3. Rebuild your app

```sh
$ expo prebuild
$ expo run:ios --device
```

# Configuartion

You can configure the iOS messages by adding the following props to your app.json file:

- PhotoLibraryUsageDescription
- CameraUsageDescription
- MicrophoneUsageDescription

Example:
```json
"plugins": [
  [
		"with-rn-image-crop-picker",
		{
			"PhotoLibraryUsageDescription": "Allow app XYZ to access your photos",
			"CameraUsageDescription": "Allow app XYZ to access your camera",
			"MicrophoneUsageDescription": "Allow app XYZ to access your microphone"
		}
	]
]
```

# Contributing

Contributions are very welcome!
