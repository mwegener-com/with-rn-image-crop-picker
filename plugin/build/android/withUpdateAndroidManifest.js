"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addManifestPermissions = void 0;
const config_plugins_1 = require("expo/config-plugins");
const addManifestPermissions = (config) => {
    return (0, config_plugins_1.withAndroidManifest)(config, async (config) => {
        config.modResults = await setCustomConfigAsync(config.modResults);
        return config;
    });
};
exports.addManifestPermissions = addManifestPermissions;
async function setCustomConfigAsync(androidManifest) {
    config_plugins_1.AndroidConfig.Permissions.ensurePermission(androidManifest, "android.permission.CAMERA");
    return androidManifest;
}
