"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBuildscript = exports.withUpdateAppBuildGradle = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withUpdateAppBuildGradle = (config) => {
    return (0, config_plugins_1.withAppBuildGradle)(config, (config) => {
        if (config.modResults.language === "groovy") {
            config.modResults.contents = setBuildscript(config.modResults.contents);
        }
        else {
            config_plugins_1.WarningAggregator.addWarningAndroid("android-google-services", `Cannot automatically configure project build.gradle if it's not groovy`);
        }
        return config;
    });
};
exports.withUpdateAppBuildGradle = withUpdateAppBuildGradle;
function setBuildscript(buildGradle) {
    let newBuildGradle = buildGradle;
    if (!newBuildGradle.includes("vectorDrawables.useSupportLibrary = true")) {
        const newEntry = `defaultConfig {\n\t\tvectorDrawables.useSupportLibrary = true`;
        newBuildGradle = newBuildGradle.replace(/defaultConfig\s?{/, newEntry);
    }
    return newBuildGradle;
}
exports.setBuildscript = setBuildscript;
exports.default = exports.withUpdateAppBuildGradle;
