import {
  ConfigPlugin,
  withPlugins,
  createRunOncePlugin,
} from "expo/config-plugins";

import { addManifestPermissions } from "./android/withUpdateAndroidManifest";
import { updateAppBuildGradle } from "./android/withUpdateAppBuildGradle";
import { updateInfoPlist } from "./ios/withUpdateInfoPlist";

const pkg = require("../../package.json");

interface PluginProps {
  PhotoLibraryUsageDescription?: string;
  CameraUsageDescription?: string;
  MicrophoneUsageDescription?: string;
}
const withImageCropPicker: ConfigPlugin<PluginProps> = (
  config,
  {
    PhotoLibraryUsageDescription,
    CameraUsageDescription,
    MicrophoneUsageDescription,
  } = {},
) => {
  return withPlugins(config, [
    [
      updateInfoPlist,
      {
        photolibText: PhotoLibraryUsageDescription,
        cameraText: CameraUsageDescription,
        microText: MicrophoneUsageDescription,
      },
    ],
    updateAppBuildGradle,
    addManifestPermissions,
  ]);
};

export default createRunOncePlugin(withImageCropPicker, pkg.name, pkg.version);
