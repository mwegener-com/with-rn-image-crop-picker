"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withMyCustomConfig = void 0;
const config_plugins_1 = require("@expo/config-plugins");
// Using helpers keeps error messages unified and helps cut down on XML format changes.
const { addMetaDataItemToMainApplication, getMainApplicationOrThrow } = config_plugins_1.AndroidConfig.Manifest;
const withMyCustomConfig = config => {
    return (0, config_plugins_1.withAndroidManifest)(config, async (config) => {
        // Modifiers can be async, but try to keep them fast.
        config.modResults = await setCustomConfigAsync(config, config.modResults);
        return config;
    });
};
exports.withMyCustomConfig = withMyCustomConfig;
// Splitting this function out of the mod makes it easier to test.
async function setCustomConfigAsync(config, androidManifest) {
    const appId = 'my-app-id';
    // Get the <application /> tag and assert if it doesn't exist.
    const mainApplication = getMainApplicationOrThrow(androidManifest);
    addMetaDataItemToMainApplication(mainApplication, 
    // value for `android:name`
    'my-app-id-key', 
    // value for `android:value`
    appId);
    return androidManifest;
}
