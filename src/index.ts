import { ConfigPlugin, withPlugins } from "@expo/config-plugins";

import { withUpdateAndroidManifest } from "./android/withUpdateAndroidManifest";
import { withUpdateAppBuildGradle } from "./android/withUpdateAppBuildGradle";
import { withUpdateProjectBuildGradle } from "./android/withUpdateProjectBuildGradle";
import { withUpdateInfoPlist } from "./ios/withUpdateInfoPlist";

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
  } = {},
) => {
  return withPlugins(config, [
    [
      withUpdateInfoPlist,
      {
        photolibText: PhotoLibraryUsageDescription,
        cameraText: CameraUsageDescription,
        microText: MicrophoneUsageDescription,
      },
    ],
    withUpdateProjectBuildGradle,
    withUpdateAppBuildGradle,
    withUpdateAndroidManifest,
  ]);
};

export default withImageCropPicker;
