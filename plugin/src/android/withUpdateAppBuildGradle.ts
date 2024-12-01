import {
  ConfigPlugin,
  WarningAggregator,
  withAppBuildGradle,
} from "expo/config-plugins";

export const updateAppBuildGradle: ConfigPlugin = (config) => {
  return withAppBuildGradle(config, (config) => {
    if (config.modResults.language === "groovy") {
      config.modResults.contents = setBuildscript(config.modResults.contents);
    } else {
      WarningAggregator.addWarningAndroid(
        "withImageCropPicker",
        `Cannot automatically configure app build.gradle if it's not groovy`,
      );
    }
    return config;
  });
};

export function setBuildscript(buildGradle: string) {
  let newBuildGradle = buildGradle;

  if (!buildGradle.includes("vectorDrawables.useSupportLibrary = true")) {
    const newEntry = `defaultConfig {\n\t\tvectorDrawables.useSupportLibrary = true`;
    newBuildGradle = newBuildGradle.replace(/defaultConfig\s?{/, newEntry);
  }

  return newBuildGradle;
}
