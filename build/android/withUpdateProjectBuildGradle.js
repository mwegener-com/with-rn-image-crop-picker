"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBuildscript = exports.withUpdateProjectBuildGradle = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const withUpdateProjectBuildGradle = (config) => {
    return (0, config_plugins_1.withProjectBuildGradle)(config, (config) => {
        if (config.modResults.language === "groovy") {
            config.modResults.contents = setBuildscript(config.modResults.contents);
        }
        else {
            config_plugins_1.WarningAggregator.addWarningAndroid("android-google-services", `Cannot automatically configure project build.gradle if it's not groovy`);
        }
        return config;
    });
};
exports.withUpdateProjectBuildGradle = withUpdateProjectBuildGradle;
function setBuildscript(buildGradle) {
    let newBuildGradle = buildGradle;
    if (!newBuildGradle.includes("maven { url 'https://maven.google.com' }")) {
        const google = `allprojects {\n\trepositories {\n\t\tmaven { url 'https://maven.google.com' }`;
        newBuildGradle = newBuildGradle.replace(/allprojects *{\n.*repositories\s?{/, google);
    }
    if (!newBuildGradle.includes("maven { url 'https://www.jitpack.io' }")) {
        const jitpack = `allprojects {
            repositories {
                maven { url 'https://www.jitpack.io' }`;
        newBuildGradle = newBuildGradle.replace(/allprojects *{\n.*repositories\s?{/, jitpack);
    }
    return newBuildGradle;
}
exports.setBuildscript = setBuildscript;
exports.default = exports.withUpdateProjectBuildGradle;
