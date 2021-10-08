import { ConfigPlugin, withInfoPlist } from "@expo/config-plugins";

export const withImageCropPicker: ConfigPlugin<string> = (config) => {
  return withInfoPlist(config, (config) => {
    config.modResults.NSPhotoLibraryUsageDescription =
      "Allow $(PRODUCT_NAME) to access your photo library";
    config.modResults.NSCameraUsageDescription =
      "Allow $(PRODUCT_NAME) to access your camera";
    config.modResults.NSMicrophoneUsageDescription =
      "Allow $(PRODUCT_NAME) to access your microphone";

    return config;
  });
};

export default withImageCropPicker;
