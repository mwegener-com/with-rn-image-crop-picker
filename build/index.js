"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withImageCropPicker = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withImageCropPicker = (config, { PhotoLibraryUsageDescription, CameraUsageDescription, MicrophoneUsageDescription, } = {}) => {
    const photoDescription = PhotoLibraryUsageDescription ||
        "Allow $(PRODUCT_NAME) to access your photo library";
    const CameraDescription = CameraUsageDescription || "Allow $(PRODUCT_NAME) to access your camera";
    const MicrophoneDescription = MicrophoneUsageDescription ||
        "Allow $(PRODUCT_NAME) to access your microphone";
    return (0, config_plugins_1.withInfoPlist)(config, (config) => {
        config.modResults.NSPhotoLibraryUsageDescription = photoDescription;
        config.modResults.NSCameraUsageDescription = CameraDescription;
        config.modResults.NSMicrophoneUsageDescription = MicrophoneDescription;
        return config;
    });
};
exports.withImageCropPicker = withImageCropPicker;
exports.default = exports.withImageCropPicker;
