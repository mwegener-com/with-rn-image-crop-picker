"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBuildscript = exports.updateAppBuildGradle = void 0;
const config_plugins_1 = require("expo/config-plugins");
const updateAppBuildGradle = (config) => {
    return (0, config_plugins_1.withAppBuildGradle)(config, (config) => {
        if (config.modResults.language === "groovy") {
            config.modResults.contents = setBuildscript(config.modResults.contents);
        }
        else {
            config_plugins_1.WarningAggregator.addWarningAndroid("withImageCropPicker", `Cannot automatically configure app build.gradle if it's not groovy`);
        }
        return config;
    });
};
exports.updateAppBuildGradle = updateAppBuildGradle;
function setBuildscript(buildGradle) {
    let newBuildGradle = buildGradle;
    if (!buildGradle.includes("vectorDrawables.useSupportLibrary = true")) {
        const newEntry = `defaultConfig {\n\t\tvectorDrawables.useSupportLibrary = true`;
        newBuildGradle = newBuildGradle.replace(/defaultConfig\s?{/, newEntry);
    }
    return newBuildGradle;
}
exports.setBuildscript = setBuildscript;
