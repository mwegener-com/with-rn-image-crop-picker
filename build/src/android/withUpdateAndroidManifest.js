"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withUpdateAndroidManifest = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const Permissions_1 = require("@expo/config-plugins/build/android/Permissions");
const withUpdateAndroidManifest = (config) => {
    return (0, config_plugins_1.withAndroidManifest)(config, async (config) => {
        config.modResults = await setCustomConfigAsync(config, config.modResults);
        return config;
    });
};
exports.withUpdateAndroidManifest = withUpdateAndroidManifest;
async function setCustomConfigAsync(config, androidManifest) {
    (0, Permissions_1.addPermission)(androidManifest, 'android.permission.CAMERA');
    return androidManifest;
}
exports.default = exports.withUpdateAndroidManifest;
