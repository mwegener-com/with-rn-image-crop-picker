"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withImageCropPicker = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withUpdateAndroidManifest_1 = require("./android/withUpdateAndroidManifest");
const withUpdateAppBuildGradle_1 = require("./android/withUpdateAppBuildGradle");
const withUpdateProjectBuildGradle_1 = require("./android/withUpdateProjectBuildGradle");
const withUpdateInfoPlist_1 = require("./ios/withUpdateInfoPlist");
const withImageCropPicker = (config, { PhotoLibraryUsageDescription, CameraUsageDescription, MicrophoneUsageDescription } = {}) => {
    return (0, config_plugins_1.withPlugins)(config, [
        [
            withUpdateInfoPlist_1.withUpdateInfoPlist,
            {
                photolibText: PhotoLibraryUsageDescription,
                cameraText: CameraUsageDescription,
                microText: MicrophoneUsageDescription,
            },
        ],
        withUpdateProjectBuildGradle_1.withUpdateProjectBuildGradle,
        withUpdateAppBuildGradle_1.withUpdateAppBuildGradle,
        withUpdateAndroidManifest_1.withUpdateAndroidManifest,
    ]);
};
exports.withImageCropPicker = withImageCropPicker;
exports.default = exports.withImageCropPicker;
