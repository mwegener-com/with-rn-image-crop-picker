"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withImageCropPicker = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withImageCropPicker = (config) => {
    return (0, config_plugins_1.withInfoPlist)(config, (config) => {
        config.modResults.NSPhotoLibraryUsageDescription =
            "Diese App benötigt Zugriff auf deine Fotos";
        config.modResults.NSCameraUsageDescription =
            "Diese App benötigt Zugriff auf deine Kamera";
        config.modResults.NSMicrophoneUsageDescription =
            "Diese App benötigt Zugriff auf dein Mikrofon";
        return config;
    });
};
exports.withImageCropPicker = withImageCropPicker;
exports.default = exports.withImageCropPicker;
