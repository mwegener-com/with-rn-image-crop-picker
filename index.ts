import { ConfigPlugin, withInfoPlist } from "@expo/config-plugins";

interface PluginProps {
  PhotoLibraryUsageDescription?: string;
  CameraUsageDescription?: string;
  MicrophoneUsageDescription?: string;
}

export const withImageCropPicker: ConfigPlugin<PluginProps> = (
  config,
  {
    PhotoLibraryUsageDescription,
    CameraUsageDescription,
    MicrophoneUsageDescription,
  } = {}
) => {
  const photoDescription =
    PhotoLibraryUsageDescription ||
    "Allow $(PRODUCT_NAME) to access your photo library";
  const CameraDescription =
    CameraUsageDescription || "Allow $(PRODUCT_NAME) to access your camera";
  const MicrophoneDescription =
    MicrophoneUsageDescription ||
    "Allow $(PRODUCT_NAME) to access your microphone";

  return withInfoPlist(config, (config) => {
    config.modResults.NSPhotoLibraryUsageDescription = photoDescription;
    config.modResults.NSCameraUsageDescription = CameraDescription;
    config.modResults.NSMicrophoneUsageDescription = MicrophoneDescription;

    return config;
  });
};

export default withImageCropPicker;
