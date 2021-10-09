"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withUpdateInfoPlist = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withUpdateInfoPlist = (config, { photolibText, cameraText, microText } = {}) => {
    const photoDescription = photolibText || 'Allow $(PRODUCT_NAME) to access your photo library';
    const CameraDescription = cameraText || 'Allow $(PRODUCT_NAME) to access your camera';
    const MicrophoneDescription = microText || 'Allow $(PRODUCT_NAME) to access your microphone';
    return (0, config_plugins_1.withInfoPlist)(config, (config) => {
        config.modResults.NSPhotoLibraryUsageDescription = photoDescription;
        config.modResults.NSCameraUsageDescription = CameraDescription;
        config.modResults.NSMicrophoneUsageDescription = MicrophoneDescription;
        return config;
    });
};
exports.withUpdateInfoPlist = withUpdateInfoPlist;
exports.default = exports.withUpdateInfoPlist;
