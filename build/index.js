"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withImageCropPicker = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withImageCropPicker = (config) => {
    return (0, config_plugins_1.withInfoPlist)(config, (config) => {
        config.modResults.NSPhotoLibraryUsageDescription =
            "Allow $(PRODUCT_NAME) to access your photo library";
        config.modResults.NSCameraUsageDescription =
            "Allow $(PRODUCT_NAME) to access your camera";
        config.modResults.NSMicrophoneUsageDescription =
            "Allow $(PRODUCT_NAME) to access your microphone";
        return config;
    });
};
exports.withImageCropPicker = withImageCropPicker;
exports.default = exports.withImageCropPicker;
